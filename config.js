const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348102701172";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_32_08_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDE5LFxuICAgICAgICAxODcsXG4gICAgICAgIDkyLFxuICAgICAgICA4MyxcbiAgICAgICAgMjcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNyxcbiAgICAgICAgNTUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMzYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTY4LFxuICAgICAgICA0NyxcbiAgICAgICAgMjM1LFxuICAgICAgICAzMSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMTksXG4gICAgICAgIDQ4LFxuICAgICAgICAxOTksXG4gICAgICAgIDUwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNzcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODksXG4gICAgICAgIDE2NCxcbiAgICAgICAgNSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA2MyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMzQsXG4gICAgICAgIDgyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDg1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDExLFxuICAgICAgICA3MixcbiAgICAgICAgMTksXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDkzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgOTcsXG4gICAgICAgIDExOSxcbiAgICAgICAgODUsXG4gICAgICAgIDk5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTkzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTE3LFxuICAgICAgICA0OSxcbiAgICAgICAgMTksXG4gICAgICAgIDI3LFxuICAgICAgICA5MyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxODgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE1NixcbiAgICAgICAgNTQsXG4gICAgICAgIDE1LFxuICAgICAgICA2NSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDI2LFxuICAgICAgICA4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDQwLFxuICAgICAgICA1LFxuICAgICAgICA3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxODAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDk5LFxuICAgICAgICA1NCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDAsXG4gICAgICAgIDIxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDU0LFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDU3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDQwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDcwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNTksXG4gICAgICAgIDM3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTkzLFxuICAgICAgICA1OSxcbiAgICAgICAgOTYsXG4gICAgICAgIDY2LFxuICAgICAgICA0OSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAzNSxcbiAgICAgICAgODQsXG4gICAgICAgIDkzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTAzLFxuICAgICAgICA2NSxcbiAgICAgICAgOCxcbiAgICAgICAgOTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDcyLFxuICAgICAgICAxODcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjQsXG4gICAgICAgIDEsXG4gICAgICAgIDc4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTczLFxuICAgICAgICAyMzksXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMDksXG4gICAgICAgIDk3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA5OSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMDhcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDIsXG4gICAgICAgIDU4LFxuICAgICAgICA1MSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNzUsXG4gICAgICAgIDg0LFxuICAgICAgICAxODIsXG4gICAgICAgIDI2LFxuICAgICAgICAxMixcbiAgICAgICAgMjEzLFxuICAgICAgICAzNixcbiAgICAgICAgMTMzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMzIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNzUsXG4gICAgICAgIDcxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDU0LFxuICAgICAgICAxOCxcbiAgICAgICAgMTQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgOCxcbiAgICAgICAgMTAyLFxuICAgICAgICA1MCxcbiAgICAgICAgODgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxODQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgODAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjMyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTYsXG4gICAgICAgIDg2LFxuICAgICAgICA2OCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNTksXG4gICAgICAgIDY2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDQxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTc1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDg5LFxuICAgICAgICAxNSxcbiAgICAgICAgODgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE4MCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJablI4ZjR1eWxVN0huTXlOdUNER0tHaHN3ZEhSM2RyOHNXaTRmTWR2czRzPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJjTU1FcmsyWVRyR19HTUEyUWFDMlJnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjc2YjMwMDc3LTI2ZjgtNDMxOC1iOTBkLTRhNTZlNmU0NTFmNVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzQsXG4gICAgICAxMSxcbiAgICAgIDEzMixcbiAgICAgIDEzMixcbiAgICAgIDIxNyxcbiAgICAgIDQ0LFxuICAgICAgMjAwLFxuICAgICAgMSxcbiAgICAgIDU3LFxuICAgICAgMTUsXG4gICAgICAxMTgsXG4gICAgICAyMDAsXG4gICAgICAxOTMsXG4gICAgICAxNDUsXG4gICAgICA5MSxcbiAgICAgIDEwNyxcbiAgICAgIDEwMixcbiAgICAgIDE3OCxcbiAgICAgIDEyLFxuICAgICAgMjMzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQzLFxuICAgICAgNDgsXG4gICAgICAyMDksXG4gICAgICAyMDksXG4gICAgICAxNzgsXG4gICAgICAxNTEsXG4gICAgICAxOTAsXG4gICAgICAxMSxcbiAgICAgIDE5NSxcbiAgICAgIDIzNCxcbiAgICAgIDEzMixcbiAgICAgIDEwMSxcbiAgICAgIDExOSxcbiAgICAgIDEzNyxcbiAgICAgIDI1MCxcbiAgICAgIDExLFxuICAgICAgMjAwLFxuICAgICAgMjMyLFxuICAgICAgMTQ2LFxuICAgICAgMTEwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjVYUVNBNjkzXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTAyNzAxMTcyOjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJUaGUgSGVhbHRoIE51cnR1cmVyXCIsXG4gICAgXCJsaWRcIjogXCIxNzM2NTg1ODA0OTY0MDY6MkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNUEN1SW9DRUpTMnNMVUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjgxY1Y5alJobGxiZjJ1T2hhbEJudEp4SHVnN09aNWtFWjhFT2xVS2lUbEU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiWWxWcUdqTUVEdlFEMFZPVjBUeVd6ckt2TkNQM1F6eWhvazlSMmhZcUsweW8rOFQ2TmF0dEJiVTNyZFowclNGNjZTSnhqREM5QzJrQ1hSdm1vbXJkQmc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwidW1weStEL1BCRnBKM1JyZmYxdU54c1RWWHpYR0QyYVpWUnR3RWdoN243aEJFdTd6bFdQRjZFRnBRZnBRekRmbklveHkrUlozMitldmR5cUdBRWVNZ3c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODEwMjcwMTE3MjoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA1MixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgODFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjU1NTE2MCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUhNWlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSE1aLmpzb24iOiAie1wia2V5RGF0YVwiOlwiVWltK0QrMG45SlhRcDF3aGsxdld2aVUvWUk3d1FVWUxGcjFocEoxMTE2RT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo1NTg3Njg0NTEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMjU1NTE2NDcxMVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
