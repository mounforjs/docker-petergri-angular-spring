SELECT * FROM user_info;

SELECT * FROM admin_info;

SELECT * FROM hobby;

SELECT * FROM chooses;

SELECT * FROM chat;

SELECT * FROM is_member;

-- select all members of all chats:
SELECT * FROM (chat NATURAL JOIN is_member) JOIN user_info ON member_id = user_info.user_id;

SELECT * FROM message;