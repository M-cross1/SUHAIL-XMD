const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_21_07_11_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICA0OCxcbiAgICAgICAgMTM2LFxuICAgICAgICA5MCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDM3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDU4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDI5LFxuICAgICAgICA4MCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDU4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTAyLFxuICAgICAgICAxNCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgOTksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDI5LFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgODQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNDAsXG4gICAgICAgIDk5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNzksXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTI1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDg4LFxuICAgICAgICA2NyxcbiAgICAgICAgOTYsXG4gICAgICAgIDUyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTM4LFxuICAgICAgICAwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMzgsXG4gICAgICAgIDQ4LFxuICAgICAgICAzMCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTgxLFxuICAgICAgICAzNSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxOTksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTI0LFxuICAgICAgICA0OCxcbiAgICAgICAgMTksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTc5LFxuICAgICAgICA4MCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjMzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgODMsXG4gICAgICAgIDk2LFxuICAgICAgICA2MixcbiAgICAgICAgOCxcbiAgICAgICAgNTYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNzksXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE4MixcbiAgICAgICAgNjIsXG4gICAgICAgIDczLFxuICAgICAgICAxOSxcbiAgICAgICAgNixcbiAgICAgICAgMjQ5LFxuICAgICAgICA1NixcbiAgICAgICAgMjAzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMzMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMzksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjI0LFxuICAgICAgICA3OSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDk5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgOTQsXG4gICAgICAgIDM1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTE0LFxuICAgICAgICA1MyxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMTksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTY0LFxuICAgICAgICA4OSxcbiAgICAgICAgMTI2LFxuICAgICAgICA1OCxcbiAgICAgICAgMTQwLFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDI5LFxuICAgICAgICA3MixcbiAgICAgICAgMTg1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTIsXG4gICAgICAgIDQzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDQzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTcxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyNixcbiAgICAgICAgNzcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDYzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgOTlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDQxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNzEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNSxcbiAgICAgICAgODksXG4gICAgICAgIDY1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDUyLFxuICAgICAgICA3MCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTg0LFxuICAgICAgICA0MCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDM3LFxuICAgICAgICA1OCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDkwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTMzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDYwLFxuICAgICAgICAxMixcbiAgICAgICAgMTcxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMzUsXG4gICAgICAgIDU4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDcsXG4gICAgICAgIDM5LFxuICAgICAgICAyNDksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDk1LFxuICAgICAgICAxMixcbiAgICAgICAgMTg5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjMyLFxuICAgICAgICAyNixcbiAgICAgICAgMTI4LFxuICAgICAgICAzMCxcbiAgICAgICAgMTI3LFxuICAgICAgICA4MyxcbiAgICAgICAgMTQyLFxuICAgICAgICA0NixcbiAgICAgICAgOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjE5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkZtcDFNNHRuMlI4WnF0eTlmSm5KTWNPYUdUeWN0cklNQ0dxdG5UK2hXOVk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0NzA0OTYwMjI5OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiM0E0MkI5MDJDNjY4OUZENEFGMTU5QUFEQ0IyRDJGREFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMwNzU0NDE3XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImU3blZRV3pQUm1pWWtFajR3TWVsMUFcIixcbiAgXCJwaG9uZUlkXCI6IFwiY2U3MzdjZjctMGIzNi00ODZmLTkwOGUtYWE2OTU1ZDJiMjcwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDksXG4gICAgICA1MSxcbiAgICAgIDIyLFxuICAgICAgNSxcbiAgICAgIDE2NCxcbiAgICAgIDI0NCxcbiAgICAgIDEyMixcbiAgICAgIDEwNCxcbiAgICAgIDE1NCxcbiAgICAgIDIxNCxcbiAgICAgIDcsXG4gICAgICAyMCxcbiAgICAgIDE4NyxcbiAgICAgIDIzMSxcbiAgICAgIDE5MyxcbiAgICAgIDUxLFxuICAgICAgMTIsXG4gICAgICAxMjksXG4gICAgICA2MixcbiAgICAgIDE2MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1NCxcbiAgICAgIDYxLFxuICAgICAgMTYzLFxuICAgICAgMjQ5LFxuICAgICAgMjE1LFxuICAgICAgNzEsXG4gICAgICAxNTcsXG4gICAgICAyNDcsXG4gICAgICAyMzYsXG4gICAgICAxMjgsXG4gICAgICAxMDcsXG4gICAgICAxNzIsXG4gICAgICA0MCxcbiAgICAgIDExMyxcbiAgICAgIDI3LFxuICAgICAgMjQzLFxuICAgICAgMjA2LFxuICAgICAgMTU3LFxuICAgICAgMTA4LFxuICAgICAgMTEwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkdCRktYUU5RXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDQ5NjAyMjk5OjIzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI3MDM1NjU5NzYzOTMyOjIzQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pQQnZ0Y0NFT251cExrR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNzBqVGdET2Zsd29IVkJqNFRpTE1zNXp0U3ZLZldvYnJjTFBjRHBDd3NUaz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI3VHZYb2E0MVR3bXJ0WnhlY0ZiYktJQ0gyeE5ZQVZiRVk4Y3dnZzNmRGw1c2ZOU1ozTVBKazJDbkxma2d4eHhsS0J2YnlyZUVuUFJGMUZ5NEFZRXdCZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJTZlFmTCs5bmo0cmxkaVpBMlVYMjNMaWg0NU9jaW9Pc3JSUVBvR3drUG4yRWVsZDhLUDNFcnJCWUMzNVB6V1gxVEgzZFAyN3JPekp3ZFlSSlloOTFEdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDQ5NjAyMjk5OjIzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDU3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzA3NTQ0MTQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFIbmhcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUhuaC5qc29uIjogIntcImtleURhdGFcIjpcIm5UN1VoMlpBY1FWeHFDUnJYOFl5ZURHYVhwNzZjOFZFM21GZWkwSHBJWnc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzIwMzQ3MjgxLFwiY3VycmVudEluZGV4XCI6NSxcImRldmljZUluZGV4ZXNcIjpbMCw0XX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
