module.exports = (client) => {
    console.log(`${client.user.tag} is online!`);
  client.user.setActivity(client.users.cache.size + ' users!', { type: "WATCHING"});
};
