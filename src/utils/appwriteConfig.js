import { Client, Databases } from 'appwrite';

const client = new Client();

client
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject('672e834a001319126ecd');

export const db = new Databases(client);
export { ID } from 'appwrite';