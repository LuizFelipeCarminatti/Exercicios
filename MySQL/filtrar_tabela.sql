select * from users
where id between 1 and 5
order by id asc 
limit 5 offset 2; 
-- asc ou desc

select * from users
where nome like '%z';