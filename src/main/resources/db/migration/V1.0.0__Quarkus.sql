create table CHAMPIONSHIP
(
    ID   int
        constraint CHAMPIONSHIP_PK
            primary key,
    year int
);

create unique index CHAMPIONSHIP_YEAR_UINDEX
    on CHAMPIONSHIP (year)
;
create sequence CHAMPIONSHIP_SEQ;


