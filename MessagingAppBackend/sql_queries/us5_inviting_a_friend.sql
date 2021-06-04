-- EXECUTE FOR PRECONDITION FULLFILMENT (not necessary for the real project)
-- we have a user in our db:
INSERT INTO user_info (user_name, user_password)
VALUES("us5_user", "password");
-- we have a member of chat to invite to:
-- let it be the admin of this chat (not mandatory)
INSERT INTO user_info (user_name, user_password)
VALUES("us5_admin", "other_password");

-- Here user_id is hardcoded, should be the user_id of the user, who sent his birthdate and email data
-- birthdate and email are provided for select, select chooses only the user_id from the user_info
INSERT INTO admin_info (user_id, birthdate, email)
SELECT user_id, DATE("1999-06-15"), "email@gmail.com" FROM user_info 
WHERE user_name = 'us5_admin';

-- Let this user to create a chat:
INSERT INTO chat (chat_description, chat_name, creator_id)
SELECT "Chat for friends invitation", "My Chat for invitation", user_id FROM user_info 
WHERE user_name = 'us5_admin';
-- additionally we must update the members table to make this user a member of this chat.
INSERT INTO is_member(chat_id, member_id)
SELECT chat_id, creator_id FROM chat 
WHERE chat_name = 'My Chat for invitation';

-- make them friends:
INSERT INTO is_friend_of(user_id, friend_id)
VALUES((select user_id from user_info where user_name = 'us5_user'), (select user_id from user_info where user_name = 'us5_admin'));

-- PRECONDITION: we have a user, this user has a friend to invite, the user is a member of the chat.


-- USE CASE 5:
INSERT INTO invites(chat_id, invited_by_id, user_id)
VALUES((select chat_id from chat where chat_name = "My Chat for invitation"), (select user_id from user_info where user_name = 'us5_user'), (select user_id from user_info where user_name = 'us5_admin'));

INSERT INTO is_member(chat_id, member_id)
VALUES((select chat_id from chat INNER JOIN user_info ON creator_id = user_id where user_name = 'us5_admin'), (select user_id from user_info where user_name = 'us5_user'));