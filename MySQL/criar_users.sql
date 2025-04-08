create table users (
	id int unsigned not null auto_increment,
    nome varchar(100) not null,
    constraint users_pk primary key (id),
    constraint users_nome unique key (nome)
);