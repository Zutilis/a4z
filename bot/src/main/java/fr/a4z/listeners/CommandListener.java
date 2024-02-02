package fr.a4z.listeners;

import java.awt.Color;
import java.util.List;

import org.jetbrains.annotations.NotNull;

import net.dv8tion.jda.api.EmbedBuilder;
import net.dv8tion.jda.api.entities.Message;
import net.dv8tion.jda.api.entities.MessageEmbed;
import net.dv8tion.jda.api.events.guild.GuildReadyEvent;
import net.dv8tion.jda.api.events.interaction.command.SlashCommandInteractionEvent;
import net.dv8tion.jda.api.hooks.ListenerAdapter;
import net.dv8tion.jda.api.interactions.commands.OptionMapping;
import net.dv8tion.jda.api.interactions.commands.OptionType;
import net.dv8tion.jda.api.interactions.commands.build.CommandData;
import net.dv8tion.jda.api.interactions.commands.build.Commands;

public class CommandListener extends ListenerAdapter {
	
	@Override
	public void onGuildReady(@NotNull GuildReadyEvent event)
	{
		final CommandData annonce = Commands.slash("annonce", "Créer une annonce")
				.addOption(OptionType.STRING, "titre", "Titre de l'annonce", true)
				.addOption(OptionType.STRING, "description", "Description de l'annonce", true);

		final CommandData clear = Commands.slash("clear", "Supprimer des messages (Minimum 2, Maximum 100)")
				.addOption(OptionType.STRING, "nombre", "Nombre de messages (Minimum 2, Maximum 100)", true);

		event.getGuild()
				.updateCommands()
				.addCommands(annonce, clear)
				.queue();
	}

	@Override
	public void onSlashCommandInteraction(@NotNull SlashCommandInteractionEvent event)
	{
		if (!event.getMember().getRoles().contains(
				event.getGuild().getRoleById(1159392393154527282L)))
		{
			event.getInteraction()
					.reply("Tu n'as pas les permissions.")
					.setEphemeral(true)
					.queue();
			return ;
		}

		if (event.getName().equals("annonce"))
		{
			if (event.getChannel().getIdLong() == 1159394090543231028L)
			{
				final List<OptionMapping> options = event.getOptions();

				final OptionMapping title = options.get(0);
				final OptionMapping description = options.get(1);

				final MessageEmbed embed = new EmbedBuilder()
						.setTitle(title.getAsString())
						.setDescription(description.getAsString())
						.setColor(new Color(68, 130, 202))
						.setFooter("Zuti")
						.build();

				event.getChannel().asTextChannel()
						.sendMessageEmbeds(embed)
						.queue();

				event.getInteraction()
						.reply("Annonce créée avec succès.")
						.setEphemeral(true)
						.queue();
			}
		}
		
		if (event.getName().equals("clear"))
		{
			final List<OptionMapping> options = event.getOptions();

			int number = options.get(0).getAsInt();

			if (number < 2 || number > 100)
			{
				event.getInteraction()
					.reply("Impossibilité de supprimer ce nombre de messages. Rappel: Minimum 2, Maximum 100.")
					.setEphemeral(true)
					.queue();

				return ;
			}

			final List<Message> msgs = event.getChannel().getHistory()
					.retrievePast(number).complete();

			event.getChannel().asTextChannel().deleteMessages(msgs).queue();

			event.getInteraction()
					.reply("Suppression des messages avec succès.")
					.setEphemeral(true)
					.queue();
		}
	}
}
