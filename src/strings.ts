export const helpmsgStartPrivate = '<b>Hi there!</b>\nI can help you with file conversions!\n\
Please send me your file to convert. /help';

export const helpmsgPrivate = 'Hi! I am a file converter bot. I support 218 different file formats \
and I know how to handle media of any kind (<i>audio files</i>, <i>documents</i>, <i>photos</i>, \
<i>stickers</i>, <i>videos</i>, <i>voice notes</i> and <i>video notes</i>).\n\n\
<b>IMPORTANT: You can try me out for free.</b> If you need to convert only one file, just go ahead and do it. \
However, <b>this bot is a community project</b>. If you want to use this bot more often, please contribute by \
providing an <i>API key</i>: see /contribute. This only takes 30 seconds and it is dead \
simple. You will be rewarded with 25 free extra-conversions every day. It involves setting up an \
account. (Don\'t worry, it is free forever.)\n\nI also support automatic file conversions \
(even in group chats)! Enable automatic conversions if you have a lot of files of the same type \
to convert. You can enable auto-conversions as soon as you converted a file.\n\nRemember that this \
bot would not work without the many contributors it has—become one of them! /contribute\n\n\
Discussion group: @cloud_convert_bot_lounge\nNews channel: @cloud_convert_bot_news';

export const helpmsgStartGroups = '<b>Hi there!</b>\nMy name is Cloud Convert Bot and I can help \
you with file conversions! Type /help for a quick tour. Don\'t forget to set up your account: \
/contribute';

export const helpmsgGroups = '<b>Hi there!</b>\nMy name is Cloud Convert Bot and I can help \
you with file conversions!\nI will not spam you with any messages or any converted \
files (unless you ask nicely). There is two ways to tell me that I should convert a \
file for you:\n  1) <i>Reply</i> to a file someone sends. Reply with the target format \
directly (e. g. /mp4) or send /convert to see possible formats. I will use the most \
recent file if you do not hit reply for any message.\n  2) <i>Send a caption</i> when \
you send the file, e. g. /mp4 to convert to MP4.\n\nOnce the conversion is completed, \
you can enable <b>auto-conversions</b>. If you enable auto-conversions for a file type, \
I will automatically repeat this conversion for all files of the same type.\n\n\
<b>The most awesome feature</b> is that you can set up your own account. This bot can \
work for some time without an account, but if you use the bot regularly, setting up an \
account <i>is really important</i> because you can get waaay more free conversions like \
that. Set it up with /contribute. This way, you can avoid some /limitations \
and you also contribute to this bot (which is really helpful).';

export const helpmsgLimitations = 'Currently there is <b>two limitations</b>. First: you can only convert \
a few files a day. Second: you can only convert files up a certain size.\n\nBecause all users \
of this bot share a common pool of 25 conversions per day (check the balance with /balance), you \
cannot convert more than 25 files per day. <b>The good thing</b> is: you simply need to set up \
an account and BOOM—this limit is gone! See /contribute for that!\n\nTelegram does not \
allow bots (like me) to download files with more than 20 MB in size or upload files with more \
than 50 MB in size. This limit cannot be changed. If you need to convert larger files, you could \
visit cloudconvert.com. Sorry!';

export const helpmsgSetUpAccount = 'Welcome, future bot contributor!\n\
By contributing to the bot, you can <b>claim your own 25 free extra-conversions per day</b>! \
No one else will be able to impact this counter. You will not have to pay anything for this \
and it works entirely without witchcraft. All you need to do is to follow these three steps:\n\
<b>1)</b> Create your own Cloud Convert account <a href="https://cloudconvert.com/register">here</a>.\n\
<b>2)</b> Visit the <a href="https://cloudconvert.com/dashboard/api/v1/keys">dashboard</a> and copy the API key.\n\
<b>3)</b> Get back to this chat and send /apikey. Paste the API key into this chat.\n\
Good job! Now every single operation of this bot will work based on your new Cloud Convert account! \
Resetting the bot with /start clears the API key from our database. Once you sent me your API key, I \
will tell you a secret bot command as a thank-you gift!\n\n\
Please note that neither this bot nor its dev are in any way associated with cloudconvert.com. \
The people behind that site just offer free file conversions and they have a neat way to connect \
bots to that service. They\'re based in Munich, Germany and you do not need to worry about privacy concerns \
or ads or "we miss you" bullshit once you signed up. Remeber that connecting your own account to \
this bot is very important for this bot to function.';

export const helpmsgBalanceWithApiKey = 'Yay! You have connected your personal Cloud Convert account with \
this bot! Thank you! You can check its balance with /balance.\n\n\
You connected this bot by providing the following API key (thanks!):';

export const validatingApiKey = 'Validating ...';

export const helpmsgBuyMinutes = 'If you need to perform even more conversions, you can buy conversion minutes \
at www.cloudconvert.com. This bot will automatically use them if available. However, please remember \
that this project was created by a single student at Kiel University. Even though I did my best \
to keep this piece of software free of errors and as reliable as possible, I cannot guarantee that \
this bot is <i>not accidentally consuming all of your conversion minutes</i>, killing your kitten or \
the like. It has never happened so far and I consider it highly unlikely, but it is still software, \
so you never know. If you know TypeScript, you can check out the \
<a href="https://github.com/KnorpelSenf/cloudconvert-bot">source code</a> \
to verify that something as bad as this won\'t ever happen.';

export const autoConversionSaved = 'Saved.';

export const remainingConversions = 'Remaining conversions';

export const customApiKeyInstruction = 'Need to perform more conversions? /contribute';

export const helpmsgFeedback = 'Like this bot? Tell the dev @KnorpelSenf or share your thoughts in the \
discussion group at @cloud_convert_bot_lounge!\n\nThe best way to say thank you is by providing an \
API key. /contribute';

export const sendApiKey = 'Perfect! Now send me the API key in reply to this message!';

export const helpmsgInfo = 'Use this command in reply to a file! \
I will then tell you all file information (meta data) I know.';

export const helpmsgConvert = 'Use this command in reply to a file! \
I will then list all possible conversions for that.';

export const helpmsgFile = 'Alright, now send me a file to be converted to ';

export const fileInfo = 'Here\'s your file info:';
export const noFileInfo = 'I couldn\'t find any meta data about your file, sorry!';

export const cancelOperation = 'Cancel operation';

export const operationCancelled = 'Operation cancelled.';

export const helpmsgText = 'I cannot convert text messages. Instead, send me a file to convert it!';

export const apiKeyProvided = 'Thank you for providing the API key! Your own account is now ready \
and set up. By no longer relying on the default account, you help making the bot more useful \
for everyone out there!\n\nI promised to unveil a hidden bot command, and I like to keep \
promises! Here we go: whenever you provided a file, send /info to get detailed information \
about your files. Beware, a lot of things are pretty technical there, but there\'s also a \
bunch of cool facts you probably didn\'t know. How awesome is that?! Check it out!';

export const personalApiKeyInUse = 'Since you already provided your personal API key, I will also use \
your CloudConvert account in this chat! Yay! (If you do not want this, you can reset the bot in this chat.)';

export const fileTooBig = 'The file is too big! See /limitations';
export const unknownError = 'Something went wrong. Sorry for that. You may write me in \
@cloud_convert_bot_lounge because of this.';

export const invalidApiKey = 'Your API key is invalid! Did you follow the steps under /contribute?\n\n\
1) Do not type the API key yourself as there could be a typo. Instead, copy and paste the API key from the \
website directly.\n\
2) Do not use Facebook login on www.cloudconvert.com. Use an email instead. Google login should work, too.\n\
3) If nothing works, you can regenerate the API on the dashboard and try /contribute again.\n\n\
Once you provided a valid key, you can always opt out again and return to using the account shared among \
all bot users. To do so, simply restart the bot with /start.\n\nThis is the invalid API key you provided:\n';

export const noMoreConversionMinutes = 'It looks like there is no free conversions remaining! \
Check /balance!\n\nYou will automatically be provided with 25 more free conversions \
within the next 24 hours. If you don\'t want to wait, can convert your file right now. \
You just need to follow the steps under /contribute.';
