const urban = require("urban");
const usage = require("../../utils/usage.js");
module.exports = {
    config: {
        name: "urban",
        aliases: ["define", "see", "lookup"],
        usage: "$urban <thing to lookup>",
        description: "Look something up on the urban dictionary",
        permissions: "none"
    },
    run: async (bot, message, args) => {
        var targetWord = args == "" ? urban.random() : urban(args);
        if (message.author.id == 460609573300994048) return message.channel.send("Lol no kedar xD");
        let cmd = message.content.split(" ")[0];
        if (args[0].toLowerCase() == "help") return usage.detailedHelp('other/urban', message.channel, 'Search something up on the urban dictionary', '')
		targetWord.first(function(json) {
			if (json) {
				var tosend = "Urban Dictionary: **" +json.word + "**\n\n" + json.definition;
				if (json.example) {
					tosend = tosend + "\n\n__Example__:\n" + json.example;
                }
				message.channel.send(tosend);
            } else {
				message.channel.send("No matches found");
            }
        });
    }
}