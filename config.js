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

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "©SADIPS" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2347049602299";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347049602299";




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
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_21_07_11_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDEzMixcbiAgICAgICAgNjUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNzYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDUyLFxuICAgICAgICA4MSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxODEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDc0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIxLFxuICAgICAgICA3OSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxODgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNzcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDUzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDMzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwMCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNTEsXG4gICAgICAgIDkyLFxuICAgICAgICAzNSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDU5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDgxLFxuICAgICAgICA1NixcbiAgICAgICAgNzAsXG4gICAgICAgIDAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMSxcbiAgICAgICAgMzIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTY5LFxuICAgICAgICA5LFxuICAgICAgICA1OSxcbiAgICAgICAgNTgsXG4gICAgICAgIDM4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMjksXG4gICAgICAgIDc1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDExMixcbiAgICAgICAgNDUsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDY0LFxuICAgICAgICA2NSxcbiAgICAgICAgMTU2LFxuICAgICAgICA5MSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMSxcbiAgICAgICAgMzQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxOCxcbiAgICAgICAgMSxcbiAgICAgICAgMTM3LFxuICAgICAgICA3MixcbiAgICAgICAgMTIzLFxuICAgICAgICA5MSxcbiAgICAgICAgOTMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTI1LFxuICAgICAgICA5MCxcbiAgICAgICAgNyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjIsXG4gICAgICAgIDkxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgOSxcbiAgICAgICAgMjEyLFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTY4LFxuICAgICAgICA0OSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA2NyxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDcwLFxuICAgICAgICA2NCxcbiAgICAgICAgMTQwLFxuICAgICAgICAzOSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNTYsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNjksXG4gICAgICAgIDg0LFxuICAgICAgICAzOCxcbiAgICAgICAgMTk0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEsXG4gICAgICAgIDExMixcbiAgICAgICAgMTU4LFxuICAgICAgICA1NixcbiAgICAgICAgMjIwLFxuICAgICAgICAxODksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgNDYsXG4gICAgICAgIDc2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDYwLFxuICAgICAgICAzOSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMTksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjEwLFxuICAgICAgICA2NSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTMsXG4gICAgICAgIDk0LFxuICAgICAgICA5NixcbiAgICAgICAgMTY0LFxuICAgICAgICAxNCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjI1LFxuICAgICAgICA1NyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTUxLFxuICAgICAgICA0MSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDkyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgODUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTAzLFxuICAgICAgICAwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDU2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDQxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTg2LFxuICAgICAgICA2MyxcbiAgICAgICAgMTkzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjYsXG4gICAgICAgIDYxLFxuICAgICAgICAzOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA4MFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNixcbiAgICAgICAgICA5N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgNDEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgOTksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyLFxuICAgICAgICA2NSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDI4LFxuICAgICAgICAxNCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjUxLFxuICAgICAgICAxNzksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIxLFxuICAgICAgICA5MyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDExNixcbiAgICAgICAgMTA1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDY5LFxuICAgICAgICAyMzksXG4gICAgICAgIDI4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDU2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTI1LFxuICAgICAgICAzMCxcbiAgICAgICAgNTgsXG4gICAgICAgIDIxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDY4LFxuICAgICAgICA0OSxcbiAgICAgICAgMTE0LFxuICAgICAgICA1NCxcbiAgICAgICAgNzgsXG4gICAgICAgIDI4LFxuICAgICAgICA3MSxcbiAgICAgICAgOTksXG4gICAgICAgIDI0MixcbiAgICAgICAgMjIzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI0OCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJTRmJseFdTNXNxQXY4ZXIxREcrZm5EMTh4b0NDMjdHVmhKRm1nMDZ6aG1BPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogNjEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogNjEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJJWTgtWEdhMVExU09rNEJORWpFQUdnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjIzYTJiNTU0LTgwZDQtNDYyMy1hZTdkLWNkZGRlZjMyMTlmY1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNTAsXG4gICAgICA0OCxcbiAgICAgIDI0MixcbiAgICAgIDEyMSxcbiAgICAgIDE2LFxuICAgICAgMTM5LFxuICAgICAgMTk1LFxuICAgICAgNjYsXG4gICAgICAyLFxuICAgICAgNTgsXG4gICAgICAxMzgsXG4gICAgICAyMDksXG4gICAgICAxNDYsXG4gICAgICAzOCxcbiAgICAgIDY5LFxuICAgICAgOTYsXG4gICAgICAxNjYsXG4gICAgICA1NSxcbiAgICAgIDgyLFxuICAgICAgNzNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTIsXG4gICAgICAyMjIsXG4gICAgICAxOTUsXG4gICAgICAxMDEsXG4gICAgICAxMzYsXG4gICAgICAzNSxcbiAgICAgIDE5MSxcbiAgICAgIDgwLFxuICAgICAgMjAzLFxuICAgICAgNTksXG4gICAgICAzLFxuICAgICAgMTc4LFxuICAgICAgMTUxLFxuICAgICAgMjM5LFxuICAgICAgMjUyLFxuICAgICAgOTcsXG4gICAgICAyOSxcbiAgICAgIDEsXG4gICAgICAyNixcbiAgICAgIDgxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlRDRlhNOVRZXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTY1OTQ2OTkzOjMyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNzEyMzIxMDg1MDcxNjY6MzJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTGVNNWJRR0VQanVwTGtHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJNdE02S2NxUHQxVDlMajVid1E2aVB3dkhDcGZ4QW94eVkwWlk5SjZKSEhBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImkzZ3RVYWxhb0NMTnhHRmxXUkJpTkZ5OFZwWWxQaVBrNXJDVFpyVWp1S2NoQVpXQXJJQW9zenNiaGY5ZmF0c0tEMTJrYlNLVURmSno3MzJVcGloeWhBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlZrdGN2eHBrQ0RWMDlZaHJqZWRJOVZld2kvb3dWRWx1TFVTZ0VEZlhhTGwycVlDaVBXLzJWbnROd1pBY0Z6SitBeHlhQ1JJOG1mdHVmQ2dtUHoxK2pRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxNjU5NDY5OTM6MzJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDExMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiaXBob25lXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzA3NTQ0MjcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFMc0NcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUxzQy5qc29uIjogIntcImtleURhdGFcIjpcIm5IdFVHbzVKUVVsZDFZeXpuVUNHcDNkelJXa3Z0SExpdlE4aDVmdHNjalk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTcyMTMyMTAxNSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzMwNzQ4NTE1MDMxXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "MCROSS+MD" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "SADIPS☠️❤️",


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
