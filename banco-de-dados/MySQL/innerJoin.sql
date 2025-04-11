select u.id as uid, p.id as pid, p.bio, u.nome from users as u inner join profiles p on u.id = p.user_id

-- só exemplo não tem a tabela profiles, 
-- no lugar da palavra inner pode usar left para incluir todos os dados da tabela users, ou usar a palavra right, mas é mais provavel usar inner ou left 