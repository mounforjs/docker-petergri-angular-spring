-- select creator_ids of chats with the most amount of members
-- SELECT creator_id 
-- FROM (
-- 	(chat NATURAL JOIN is_member) 
-- 	JOIN user_info ON member_id = user_info.user_id
-- ) 
-- GROUP BY chat_id
-- HAVING COUNT(member_id)=(
-- 	SELECT MAX(members) FROM (
-- 	SELECT chat_id, chat_name, creator_id, COUNT(member_id) AS members 
-- 	FROM (
-- 		(chat NATURAL JOIN is_member) 
-- 		JOIN user_info ON member_id = user_info.user_id
-- 	) 
-- 	GROUP BY chat_id) result
-- );

-- select top chosen hobbies of all admins:
-- SELECT hobby_name, COUNT(hobby_name) AS number_of_choices
-- FROM ((hobby NATURAL JOIN chooses) NATURAL JOIN admin_info)
-- GROUP BY hobby_name 
-- ORDER BY number_of_choices DESC
-- LIMIT 0,3;


-- REPORT 2:
SELECT hobby_name, COUNT(hobby_name) AS number_of_choices
FROM ((hobby NATURAL JOIN chooses) NATURAL JOIN admin_info)
WHERE user_id IN (SELECT creator_id 
FROM (
	(chat NATURAL JOIN is_member) 
	JOIN user_info ON member_id = user_info.user_id
) 
GROUP BY chat_id
HAVING COUNT(member_id)=(
	SELECT MAX(members) FROM (
	SELECT chat_id, chat_name, creator_id, COUNT(member_id) AS members 
	FROM (
		(chat NATURAL JOIN is_member) 
		JOIN user_info ON member_id = user_info.user_id
	) 
	GROUP BY chat_id) result
))
GROUP BY hobby_name 
ORDER BY number_of_choices DESC
LIMIT 0,3;