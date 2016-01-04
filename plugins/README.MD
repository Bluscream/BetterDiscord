#Plugins

All plugins go to ``` %appdata%\BetterDiscord\plugins\ ```

##API functions provided by BetterDiscord, BetterAPI and webSock
This should help you if you want to write a plugin yourself :)
You should also check out the [testPlugin.js](https://github.com/Bluscream/BetterDiscord/blob/master/plugins/testPlugin.js) above.

Currently available BdApi functions:
```js
BdApi.joinServer("code");
BdApi.injectCSS("id", "css");
BdApi.clearCSS("id");
BdApi.getPlugin("name");
BdApi.getIpc();
BdApi.getCore();
BdApi.getUserIdByName("name");
BdApi.getUserNameById("id");
Core.prototype.alert("title", "text")
```

Currently available BetterAPI functions:
```js
BetterAPI.log(dbg, "type", "pluginName", "msg");
BetterAPI.appendTo("link", "Element");
BetterAPI.EnableTextSelection();
BetterAPI.getUserIdByName("name");
BetterAPI.getUserNameById(id);
BetterAPI.getUserAvatarID(id);
BetterAPI.getUserAvatarURL(id);
BetterAPI.getCurrentChannelName();
BetterAPI.getCurrentChannelID();
BetterAPI.getCurrentServerName();
BetterAPI.getCurrentServerID();
BetterAPI.getOwnID();
BetterAPI.getOwnName();
BetterAPI.addUserLabel("divID", "label", "<html>");
BetterAPI.addUserLink(divID, id1, href1, text1, [id2, href2, text2]);
BetterAPI.addUserButton("btn", "divID", "text");
BetterAPI.changeUserInfo("email", "password", "nickname", ["avatar" BetterAPI.getUserAvatarID(id)]);
```

Currently available webSock functions:
```js
webSock.sendData(opcode,data);
webSock.sendMessage(); //useless atm.
webSock.sendHeartbeat();
webSock.setStatus(game, idle);
```