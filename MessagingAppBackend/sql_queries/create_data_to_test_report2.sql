INSERT INTO user_info (user_name, user_password)
VALUES("user1", "other_password");

INSERT INTO admin_info (user_id, birthdate, email)
SELECT user_id, DATE("1999-06-15"), "email@gmail.com" FROM user_info 
WHERE user_name = 'user1';

-- ===========================================================================================

INSERT INTO user_info (user_name, user_password)
VALUES("user2", "other_password");

INSERT INTO admin_info (user_id, birthdate, email)
SELECT user_id, DATE("1999-06-15"), "email@gmail.com" FROM user_info 
WHERE user_name = 'user2';

-- ===========================================================================================

INSERT INTO user_info (user_name, user_password)
VALUES("user3", "other_password");

INSERT INTO admin_info (user_id, birthdate, email)
SELECT user_id, DATE("1999-06-15"), "email@gmail.com" FROM user_info 
WHERE user_name = 'user3';

-- ===========================================================================================

INSERT INTO hobby (hobby_name, hobby_description)
VALUES("Tennis", "Tennis is a racket sport that can be played individually against a single opponent (singles) or between two teams of two players each (doubles).");

INSERT INTO hobby (hobby_name, hobby_description)
VALUES("Football", "Just a football");

INSERT INTO hobby (hobby_name, hobby_description)
VALUES("Basketball", "Just a basketball");

INSERT INTO hobby (hobby_name, hobby_description)
VALUES("Golf", "Just a golf");

INSERT INTO chooses(hobby_id, user_id)
VALUES((select hobby_id from hobby where hobby_name = 'Tennis'), (select user_id from user_info where user_name = 'user1'));

INSERT INTO chooses(hobby_id, user_id)
VALUES((select hobby_id from hobby where hobby_name = 'Tennis'), (select user_id from user_info where user_name = 'user2'));

INSERT INTO chooses(hobby_id, user_id)
VALUES((select hobby_id from hobby where hobby_name = 'Tennis'), (select user_id from user_info where user_name = 'user3'));

INSERT INTO chooses(hobby_id, user_id)
VALUES((select hobby_id from hobby where hobby_name = 'Golf'), (select user_id from user_info where user_name = 'user1'));

INSERT INTO chooses(hobby_id, user_id)
VALUES((select hobby_id from hobby where hobby_name = 'Football'), (select user_id from user_info where user_name = 'user2'));

INSERT INTO chooses(hobby_id, user_id)
VALUES((select hobby_id from hobby where hobby_name = 'Basketball'), (select user_id from user_info where user_name = 'user2'));

INSERT INTO chooses(hobby_id, user_id)
VALUES((select hobby_id from hobby where hobby_name = 'Football'), (select user_id from user_info where user_name = 'user3'));

INSERT INTO chooses(hobby_id, user_id)
VALUES((select hobby_id from hobby where hobby_name = 'Basketball'), (select user_id from user_info where user_name = 'user3'));

-- ===========================================================================================

INSERT INTO chat (chat_description, chat_name, creator_id)
SELECT "My first chat, welcome!", "Chat1", user_id FROM user_info 
WHERE user_name = 'user1';
-- additionally we must update the members table to make this user a member of this chat.
INSERT INTO is_member(chat_id, member_id)
SELECT chat_id, creator_id FROM chat 
WHERE chat_name = 'Chat1';

INSERT INTO chat (chat_description, chat_name, creator_id)
SELECT "My first chat, welcome!", "Chat2", user_id FROM user_info 
WHERE user_name = 'user2';
-- additionally we must update the members table to make this user a member of this chat.
INSERT INTO is_member(chat_id, member_id)
SELECT chat_id, creator_id FROM chat 
WHERE chat_name = 'Chat2';

INSERT INTO chat (chat_description, chat_name, creator_id)
SELECT "My first chat, welcome!", "Chat3", user_id FROM user_info 
WHERE user_name = 'user3';
-- additionally we must update the members table to make this user a member of this chat.
INSERT INTO is_member(chat_id, member_id)
SELECT chat_id, creator_id FROM chat 
WHERE chat_name = 'Chat3';


-- The following should change the output:

-- INSERT INTO is_member(chat_id, member_id)
-- VALUES((SELECT chat_id FROM chat 
-- WHERE chat_name = 'Chat3'), (select user_id from user_info where user_name = 'user2'));

-- ===========================================================================================


