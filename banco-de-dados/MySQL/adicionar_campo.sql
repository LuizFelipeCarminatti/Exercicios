alter table users add salario decimal(15, 2) null;

update users set salario = round(rand() * 10000, 2)
where id > 0;

select * from users