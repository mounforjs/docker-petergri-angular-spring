-- a report about top 3 chats. The most popular chat is the one, which has the most active users.
-- The user is active if he has sent at least one message in any chat within last month

-- find active users
-- SELECT * FROM user_info WHERE user_id in (SELECT DISTINCT user_id FROM user_info INNER JOIN message ON sender_id = user_id
-- WHERE sent_time BETWEEN NOW() - INTERVAL 1 MONTH AND NOW());

-- REPORT 1:
-- select all active members of all chat
SELECT chat_id, chat_name, creator_id, COUNT(member_id) AS number_of_active_members FROM (chat NATURAL JOIN is_member) JOIN user_info ON member_id = user_info.user_id 
WHERE member_id IN (
	SELECT DISTINCT user_id FROM user_info INNER JOIN message ON sender_id = user_id
 	WHERE sent_time BETWEEN NOW() - INTERVAL 1 MONTH AND NOW()
) 
GROUP BY chat_id
ORDER BY number_of_active_members DESC
LIMIT 0,3;