drop database if exists atividade15;
create database atividade15 charset = UTF8 collate utf8_general_ci;
use atividade15;

create table profissional(
    id integer not null primary key auto_increment,
    nome varchar(30) not null,
    especialidade varchar(20)
);
CREATE TABLE consulta(
    id integer not null primary key auto_increment,
    paciente varchar(30) not null,
    data varchar(10) not null,
    hora varchar(5) not null,
    profissional integer not null,
    FOREIGN KEY (profissional) REFERENCES profissional(id)
);
CREATE TABLE tratamento(
    id integer not null primary key auto_increment,
    consulta integer not null,
    tratamento varchar(34) not null,
    valor integer not null,
    FOREIGN KEY (consulta) REFERENCES consulta(id)
);

create view IF NOT EXISTS tratamento_vw as 
select p.id, p.nome, p.especialidade, c.paciente, c.data, t.tratamento, t.valor 
from tratamento t
INNER JOIN consulta c on c.id = t.consulta 
INNER JOIN profissional p on p.id = c.profissional;

LOAD DATA INFILE 'C:/Users/Desenvolvimento/Desktop/atividade_aula_15_back/docs/docs/profissionais.csv'
INTO TABLE profissional
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/Users/Desenvolvimento/Desktop/atividade_aula_15_back/docs/docs/consultas.csv'
INTO TABLE consulta
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/Users/Desenvolvimento/Desktop/atividade_aula_15_back/docs/docs/tratamentos.csv'
INTO TABLE tratamento
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;
