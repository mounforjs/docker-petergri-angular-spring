SELECT * FROM user_info;

SELECT * FROM hobby;

SELECT * FROM chooses;

SELECT * FROM chat;

SELECT * FROM is_member;

-- selects all members of all chats
SELECT * FROM chat INNER JOIN is_member ON chat.chat_id = is_member.chat_id INNER JOIN user_info ON member_id = user_info.user_id;

SELECT * FROM message;