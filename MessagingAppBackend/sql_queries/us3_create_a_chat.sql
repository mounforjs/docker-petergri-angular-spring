-- EXECUTE FOR PRECONDITION FULLFILMENT (not necessary for the real project)
INSERT INTO user_info (user_name, user_password)
VALUES("us2_user", "other_password");

-- Here user_id is hardcoded, should be the user_id of the user, who sent his birthdate and email data
-- birthdate and email are provided for select, select chooses only the user_id from the user_info
INSERT INTO admin_info (user_id, birthdate, email)
SELECT user_id, DATE("1999-06-15"), "email@gmail.com" FROM user_info 
WHERE user_name = 'us2_user';

-- should look like: 
-- INSERT INTO admin_info(user_id, birthdate, email) VALUES(id, DATE(provided birthdate), provided email)
-- where id - is the id of the user

-- PRECONDITION: we have a user and this user is an admin.

-- USE CASE 3:

INSERT INTO chat (chat_description, chat_name, creator_id)
SELECT "My first chat, welcome!", "My Chat 1", user_id FROM user_info 
WHERE user_name = 'us2_user';
-- additionally we must update the members table to make this user a member of this chat.
INSERT INTO is_member(chat_id, member_id)
SELECT chat_id, creator_id FROM chat 
WHERE chat_name = 'My Chat 1';

-- should look like:
-- INSERT INTO chat (chat_description, chat_name, creator_id) VALUES(provided_description, provided_name, user_id)
-- where id - is the id of the user, who clicked on create chat button
-- INSERT INTO is_member(chat_id, user_id) SELECT chat_id, creator_id FROM chat WHERE creator_id = user_id;