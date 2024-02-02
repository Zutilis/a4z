package fr.a4z;

import fr.a4z.bot.Bot;
import fr.a4z.listeners.CommandListener;
import fr.a4z.listeners.MessageListener;

public class Main 
{
    private static final String     token = "MTE2MDUyMzAzNjg2MTE0MTEwNQ.GFrE2v.pgu9uXmL5gKZ_16Bb8BXt_BHY_37NUx7yT-82Y";

    private static Bot              bot;

    public static String            getToken()          { return (token); }
    public static Bot               getBot()            { return (bot);}

    public static void main( String[] args )
    {
        bot = new Bot(getToken());
        
        bot.addListener(new MessageListener());
        bot.addListener(new CommandListener());
    }
}
