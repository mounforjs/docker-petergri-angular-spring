-- EXECUTE TO FULLFILL THE PRECONDITION (not necessary for the real project)
INSERT INTO user_info (user_name, user_password)
VALUES("us2_user", "other_password");
-- PRECONDITION: we have user in our db.

-- USE CASE 2:
-- Here user_id is hardcoded, should be the user_id of the user, who sent his birthdate and email data
-- birthdate and email are provided for select, select chooses only the user_id from the user_info
INSERT INTO admin_info (user_id, birthdate, email)
SELECT user_id, DATE("1999-06-15"), "email@gmail.com" FROM user_info 
WHERE user_name = 'us2_user';

-- should look like: 
-- INSERT INTO admin_info(user_id, birthdate, email) VALUES(id, DATE(provided_birthdate), provided_email)
-- where id - is the id of the user