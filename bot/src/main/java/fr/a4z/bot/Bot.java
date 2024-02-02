package fr.a4z.bot;

import net.dv8tion.jda.api.OnlineStatus;
import net.dv8tion.jda.api.entities.Guild;
import net.dv8tion.jda.api.entities.Activity.ActivityType;
import net.dv8tion.jda.api.sharding.DefaultShardManagerBuilder;
import net.dv8tion.jda.api.sharding.ShardManager;
import net.dv8tion.jda.internal.entities.EntityBuilder;

public class Bot {

	private final ShardManager 	shard_manager;
	private final Guild			guild;

	public 						Bot(String token)
	{
		shard_manager = DefaultShardManagerBuilder.createDefault(token)
				.setStatus(OnlineStatus.ONLINE)
				.setActivity(EntityBuilder.createActivity(
						"", null, ActivityType.LISTENING))
				.build();

		guild = this.shard_manager.getGuildById("1159389594178035733");
	}

	public void 				addListener(Object obj)
	{
		this.shard_manager.addEventListener(obj);
	}

	public ShardManager 		getShardManager() 		{ return (shard_manager); }
	public Guild 				getGuild()				{ return (guild); }
}
