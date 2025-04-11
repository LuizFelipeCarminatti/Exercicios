insert into profiles (bio, description, user_id)
select
concat('Bio de', first_name),
concat('Descrição de', first_name), id from users

-- exemplo de isert com select, mas não está funcionando porque não tem a tabela profiles