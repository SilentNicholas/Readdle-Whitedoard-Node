'use strict'

import fetch from 'node-fetch';
import fileSystem from 'fs';
import FormData from 'form-data';

const botToken = '1921492768:AAGBAWBcORQ0n0tS4GHKn6hzdiyvxG01GQ0';
const chatId = -597962610;

const sendData = new FormData();
sendData.append('chat_id', chatId);
sendData.append('caption', 'Hey Fluix, Nikolay Skalenko has done your task. See attachment');
sendData.append('document', fileSystem.readFile('./attachment.txt'));

fetch(`https://api.telegram.org/bot${botToken}/sendDocument`, {
    'method': 'POST',
    'body': sendData,
    'headers': {'Content-Type': 'multipart/form-data'}
})
    .then(() => console.log(`Success Send`))
    .catch(err => console.log(`Fail send by reason: ${err}`));