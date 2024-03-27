--
-- PostgreSQL database dump
--

-- Dumped from database version 16.2 (Debian 16.2-1.pgdg120+2)
-- Dumped by pg_dump version 16.2 (Debian 16.2-1.pgdg120+2)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: Coaches; Type: TABLE; Schema: public; Owner: football-data
--

CREATE TABLE public."Coaches" (
    id integer NOT NULL,
    name character varying(255),
    "dateOfBirth" timestamp with time zone,
    nationality character varying(255),
    "teamId" integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Coaches" OWNER TO "football-data";

--
-- Name: Coaches_id_seq; Type: SEQUENCE; Schema: public; Owner: football-data
--

CREATE SEQUENCE public."Coaches_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Coaches_id_seq" OWNER TO "football-data";

--
-- Name: Coaches_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: football-data
--

ALTER SEQUENCE public."Coaches_id_seq" OWNED BY public."Coaches".id;


--
-- Name: Competitions; Type: TABLE; Schema: public; Owner: football-data
--

CREATE TABLE public."Competitions" (
    id integer NOT NULL,
    name character varying(255),
    code character varying(255),
    "areaName" character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Competitions" OWNER TO "football-data";

--
-- Name: Competitions_id_seq; Type: SEQUENCE; Schema: public; Owner: football-data
--

CREATE SEQUENCE public."Competitions_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Competitions_id_seq" OWNER TO "football-data";

--
-- Name: Competitions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: football-data
--

ALTER SEQUENCE public."Competitions_id_seq" OWNED BY public."Competitions".id;


--
-- Name: Players; Type: TABLE; Schema: public; Owner: football-data
--

CREATE TABLE public."Players" (
    id integer NOT NULL,
    name character varying(255),
    "position" character varying(255),
    "dateOfBirth" timestamp with time zone,
    nationality character varying(255),
    "teamId" integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Players" OWNER TO "football-data";

--
-- Name: Players_id_seq; Type: SEQUENCE; Schema: public; Owner: football-data
--

CREATE SEQUENCE public."Players_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Players_id_seq" OWNER TO "football-data";

--
-- Name: Players_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: football-data
--

ALTER SEQUENCE public."Players_id_seq" OWNED BY public."Players".id;

--
-- Name: TeamCompetitions; Type: TABLE; Schema: public; Owner: football-data
--

CREATE TABLE public."TeamCompetitions" (
    id integer NOT NULL,
    "teamId" integer,
    "competitionId" integer,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."TeamCompetitions" OWNER TO "football-data";

--
-- Name: TeamCompetitions_id_seq; Type: SEQUENCE; Schema: public; Owner: football-data
--

CREATE SEQUENCE public."TeamCompetitions_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."TeamCompetitions_id_seq" OWNER TO "football-data";

--
-- Name: TeamCompetitions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: football-data
--

ALTER SEQUENCE public."TeamCompetitions_id_seq" OWNED BY public."TeamCompetitions".id;


--
-- Name: Teams; Type: TABLE; Schema: public; Owner: football-data
--

CREATE TABLE public."Teams" (
    id integer NOT NULL,
    name character varying(255),
    tla character varying(255),
    "shortName" character varying(255),
    "areaName" character varying(255),
    address character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Teams" OWNER TO "football-data";

--
-- Name: Teams_id_seq; Type: SEQUENCE; Schema: public; Owner: football-data
--

CREATE SEQUENCE public."Teams_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Teams_id_seq" OWNER TO "football-data";

--
-- Name: Teams_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: football-data
--

ALTER SEQUENCE public."Teams_id_seq" OWNED BY public."Teams".id;


--
-- Name: Coaches id; Type: DEFAULT; Schema: public; Owner: football-data
--

ALTER TABLE ONLY public."Coaches" ALTER COLUMN id SET DEFAULT nextval('public."Coaches_id_seq"'::regclass);


--
-- Name: Competitions id; Type: DEFAULT; Schema: public; Owner: football-data
--

ALTER TABLE ONLY public."Competitions" ALTER COLUMN id SET DEFAULT nextval('public."Competitions_id_seq"'::regclass);


--
-- Name: Players id; Type: DEFAULT; Schema: public; Owner: football-data
--

ALTER TABLE ONLY public."Players" ALTER COLUMN id SET DEFAULT nextval('public."Players_id_seq"'::regclass);


--
-- Name: TeamCompetitions id; Type: DEFAULT; Schema: public; Owner: football-data
--

ALTER TABLE ONLY public."TeamCompetitions" ALTER COLUMN id SET DEFAULT nextval('public."TeamCompetitions_id_seq"'::regclass);


--
-- Name: Teams id; Type: DEFAULT; Schema: public; Owner: football-data
--

ALTER TABLE ONLY public."Teams" ALTER COLUMN id SET DEFAULT nextval('public."Teams_id_seq"'::regclass);


--
-- Name: Coaches Coaches_pkey; Type: CONSTRAINT; Schema: public; Owner: football-data
--

ALTER TABLE ONLY public."Coaches"
    ADD CONSTRAINT "Coaches_pkey" PRIMARY KEY (id);


--
-- Name: Competitions Competitions_code_key; Type: CONSTRAINT; Schema: public; Owner: football-data
--

ALTER TABLE ONLY public."Competitions"
    ADD CONSTRAINT "Competitions_code_key" UNIQUE (code);


--
-- Name: Competitions Competitions_pkey; Type: CONSTRAINT; Schema: public; Owner: football-data
--

ALTER TABLE ONLY public."Competitions"
    ADD CONSTRAINT "Competitions_pkey" PRIMARY KEY (id);


--
-- Name: Players Players_pkey; Type: CONSTRAINT; Schema: public; Owner: football-data
--

ALTER TABLE ONLY public."Players"
    ADD CONSTRAINT "Players_pkey" PRIMARY KEY (id);


--
-- Name: TeamCompetitions TeamCompetitions_pkey; Type: CONSTRAINT; Schema: public; Owner: football-data
--

ALTER TABLE ONLY public."TeamCompetitions"
    ADD CONSTRAINT "TeamCompetitions_pkey" PRIMARY KEY (id);


--
-- Name: Teams Teams_pkey; Type: CONSTRAINT; Schema: public; Owner: football-data
--

ALTER TABLE ONLY public."Teams"
    ADD CONSTRAINT "Teams_pkey" PRIMARY KEY (id);


--
-- Name: Coaches Coaches_teamId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: football-data
--

ALTER TABLE ONLY public."Coaches"
    ADD CONSTRAINT "Coaches_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES public."Teams"(id);


--
-- Name: Players Players_teamId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: football-data
--

ALTER TABLE ONLY public."Players"
    ADD CONSTRAINT "Players_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES public."Teams"(id);


--
-- Name: TeamCompetitions TeamCompetitions_competitionId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: football-data
--

ALTER TABLE ONLY public."TeamCompetitions"
    ADD CONSTRAINT "TeamCompetitions_competitionId_fkey" FOREIGN KEY ("competitionId") REFERENCES public."Competitions"(id);


--
-- Name: TeamCompetitions TeamCompetitions_teamId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: football-data
--

ALTER TABLE ONLY public."TeamCompetitions"
    ADD CONSTRAINT "TeamCompetitions_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES public."Teams"(id);


--
-- PostgreSQL database dump complete
--

