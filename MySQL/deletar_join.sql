select u.first_name, p.bio from users u 
join profiles as p
on p.user_id = u.id
where u.first_name = 'Felipe';

delete p, u from users u
left join profiles as p
on p.user_id = u.id
where u.first_name = 'Felipe'
