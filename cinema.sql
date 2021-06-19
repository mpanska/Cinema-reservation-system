-- MySQL dump 10.13  Distrib 8.0.25, for Win64 (x86_64)
--
-- Host: localhost    Database: cinema
-- ------------------------------------------------------
-- Server version	8.0.25

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `genre`
--

DROP TABLE IF EXISTS `genre`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `genre` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `genre`
--

LOCK TABLES `genre` WRITE;
/*!40000 ALTER TABLE `genre` DISABLE KEYS */;
INSERT INTO `genre` VALUES (1,'Drama'),(2,'Crime'),(3,'Action');
/*!40000 ALTER TABLE `genre` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hall`
--

DROP TABLE IF EXISTS `hall`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hall` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `total_seats` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hall`
--

LOCK TABLES `hall` WRITE;
/*!40000 ALTER TABLE `hall` DISABLE KEYS */;
INSERT INTO `hall` VALUES (1,'1A',150),(2,'1B',90);
/*!40000 ALTER TABLE `hall` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `movie`
--

DROP TABLE IF EXISTS `movie`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `movie` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `description` varchar(255) DEFAULT NULL,
  `director` varchar(255) DEFAULT NULL,
  `duration` int DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `release_date` date DEFAULT NULL,
  `genre_id` bigint DEFAULT NULL,
  `image_file_name` varchar(255) DEFAULT NULL,
  `trailer` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK2ggat6246891h4goynp4h9lk5` (`genre_id`),
  CONSTRAINT `FK2ggat6246891h4goynp4h9lk5` FOREIGN KEY (`genre_id`) REFERENCES `genre` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movie`
--

LOCK TABLES `movie` WRITE;
/*!40000 ALTER TABLE `movie` DISABLE KEYS */;
INSERT INTO `movie` VALUES (1,'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.','Frank Darabont',144,'The Shawshank Redemption','1994-10-14',1,'https://ecsmedia.pl/c/skazani-na-shawshank-b-iext55324004.jpg','P9mwtI82k6E'),(2,'An organized crime dynasty\'s aging patriarch transfers control of his clandestine empire to his reluctant son.','Francis Ford Coppola',175,'The Godfather','1972-03-24',2,'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY1200_CR107,0,630,1200_AL_.jpg','sY1S34973zA'),(3,'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.','Christopher Nolan',152,'The Dark Knight','2008-07-18',3,'https://images-na.ssl-images-amazon.com/images/I/91KkWf50SoL._AC_SL1500_.jpg','EXeTwQWrcwY'),(4,'Blind with revenge, John will immediately unleash a carefully orchestrated maelstrom of destruction against the sophisticated kingpin, Viggo Tarasov, and his family, who are fully aware of his lethal capacity.','Chad Stahelski, David Leitch',101,'John Wick','2014-12-05',3,'https://image.ceneostatic.pl/data/products/65478707/i-john-wick-dvd.jpg','2AUmvWm5ZDQ');
/*!40000 ALTER TABLE `movie` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `role`
--

DROP TABLE IF EXISTS `role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `role` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role`
--

LOCK TABLES `role` WRITE;
/*!40000 ALTER TABLE `role` DISABLE KEYS */;
INSERT INTO `role` VALUES (1,'ROLE_ADMIN'),(2,'ROLE_USER');
/*!40000 ALTER TABLE `role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `seat`
--

DROP TABLE IF EXISTS `seat`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `seat` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `number` int DEFAULT NULL,
  `position` int DEFAULT NULL,
  `row` varchar(255) DEFAULT NULL,
  `hall_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKmex5mgywjtf71xpbt51c328pn` (`hall_id`),
  CONSTRAINT `FKmex5mgywjtf71xpbt51c328pn` FOREIGN KEY (`hall_id`) REFERENCES `hall` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=241 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `seat`
--

LOCK TABLES `seat` WRITE;
/*!40000 ALTER TABLE `seat` DISABLE KEYS */;
INSERT INTO `seat` VALUES (1,1,1,'a',1),(2,2,2,'a',1),(3,3,3,'a',1),(4,4,5,'a',1),(5,5,6,'a',1),(6,6,7,'a',1),(7,7,8,'a',1),(8,8,10,'a',1),(9,9,11,'a',1),(10,10,12,'a',1),(11,1,1,'b',1),(12,2,2,'b',1),(13,3,3,'b',1),(14,4,5,'b',1),(15,5,6,'b',1),(16,6,7,'b',1),(17,7,8,'b',1),(18,8,10,'b',1),(19,9,11,'b',1),(20,10,12,'b',1),(21,1,1,'c',1),(22,2,2,'c',1),(23,3,3,'c',1),(24,4,5,'c',1),(25,5,6,'c',1),(26,6,7,'c',1),(27,7,8,'c',1),(28,8,10,'c',1),(29,9,11,'c',1),(30,10,12,'c',1),(31,1,1,'d',1),(32,2,2,'d',1),(33,3,3,'d',1),(34,4,5,'d',1),(35,5,6,'d',1),(36,6,7,'d',1),(37,7,8,'d',1),(38,8,10,'d',1),(39,9,11,'d',1),(40,10,12,'d',1),(41,1,1,'e',1),(42,2,2,'e',1),(43,3,3,'e',1),(44,4,5,'e',1),(45,5,6,'e',1),(46,6,7,'e',1),(47,7,8,'e',1),(48,8,10,'e',1),(49,9,11,'e',1),(50,10,12,'e',1),(51,1,1,'f',1),(52,2,2,'f',1),(53,3,3,'f',1),(54,4,5,'f',1),(55,5,6,'f',1),(56,6,7,'f',1),(57,7,8,'f',1),(58,8,10,'f',1),(59,9,11,'f',1),(60,10,12,'f',1),(61,1,1,'g',1),(62,2,2,'g',1),(63,3,3,'g',1),(64,4,5,'g',1),(65,5,6,'g',1),(66,6,7,'g',1),(67,7,8,'g',1),(68,8,10,'g',1),(69,9,11,'g',1),(70,10,12,'g',1),(71,1,1,'h',1),(72,2,2,'h',1),(73,3,3,'h',1),(74,4,5,'h',1),(75,5,6,'h',1),(76,6,7,'h',1),(77,7,8,'h',1),(78,8,10,'h',1),(79,9,11,'h',1),(80,10,12,'h',1),(81,1,1,'i',1),(82,2,2,'i',1),(83,3,3,'i',1),(84,4,5,'i',1),(85,5,6,'i',1),(86,6,7,'i',1),(87,7,8,'i',1),(88,8,10,'i',1),(89,9,11,'i',1),(90,10,12,'i',1),(91,1,1,'j',1),(92,2,2,'j',1),(93,3,3,'j',1),(94,4,5,'j',1),(95,5,6,'j',1),(96,6,7,'j',1),(97,7,8,'j',1),(98,8,10,'j',1),(99,9,11,'j',1),(100,10,12,'j',1),(101,1,1,'k',1),(102,2,2,'k',1),(103,3,3,'k',1),(104,4,5,'k',1),(105,5,6,'k',1),(106,6,7,'k',1),(107,7,8,'k',1),(108,8,10,'k',1),(109,9,11,'k',1),(110,10,12,'k',1),(111,1,1,'l',1),(112,2,2,'l',1),(113,3,3,'l',1),(114,4,5,'l',1),(115,5,6,'l',1),(116,6,7,'l',1),(117,7,8,'l',1),(118,8,10,'l',1),(119,9,11,'l',1),(120,10,12,'l',1),(121,1,1,'m',1),(122,2,2,'m',1),(123,3,3,'m',1),(124,4,5,'m',1),(125,5,6,'m',1),(126,6,7,'m',1),(127,7,8,'m',1),(128,8,10,'m',1),(129,9,11,'m',1),(130,10,12,'m',1),(131,1,1,'n',1),(132,2,2,'n',1),(133,3,3,'n',1),(134,4,5,'n',1),(135,5,6,'n',1),(136,6,7,'n',1),(137,7,8,'n',1),(138,8,10,'n',1),(139,9,11,'n',1),(140,10,12,'n',1),(141,1,1,'o',1),(142,2,2,'o',1),(143,3,3,'o',1),(144,4,5,'o',1),(145,5,6,'o',1),(146,6,7,'o',1),(147,7,8,'o',1),(148,8,10,'o',1),(149,9,11,'o',1),(150,10,12,'o',1),(151,1,1,'a',2),(152,2,2,'a',2),(153,3,3,'a',2),(154,4,5,'a',2),(155,5,6,'a',2),(156,6,7,'a',2),(157,7,8,'a',2),(158,8,10,'a',2),(159,9,11,'a',2),(160,10,12,'a',2),(161,1,1,'b',2),(162,2,2,'b',2),(163,3,3,'b',2),(164,4,5,'b',2),(165,5,6,'b',2),(166,6,7,'b',2),(167,7,8,'b',2),(168,8,10,'b',2),(169,9,11,'b',2),(170,10,12,'b',2),(171,1,1,'c',2),(172,2,2,'c',2),(173,3,3,'c',2),(174,4,5,'c',2),(175,5,6,'c',2),(176,6,7,'c',2),(177,7,8,'c',2),(178,8,10,'c',2),(179,9,11,'c',2),(180,10,12,'c',2),(181,1,1,'d',2),(182,2,2,'d',2),(183,3,3,'d',2),(184,4,5,'d',2),(185,5,6,'d',2),(186,6,7,'d',2),(187,7,8,'d',2),(188,8,10,'d',2),(189,9,11,'d',2),(190,10,12,'d',2),(191,1,1,'e',2),(192,2,2,'e',2),(193,3,3,'e',2),(194,4,5,'e',2),(195,5,6,'e',2),(196,6,7,'e',2),(197,7,8,'e',2),(198,8,10,'e',2),(199,9,11,'e',2),(200,10,12,'e',2),(201,1,1,'f',2),(202,2,2,'f',2),(203,3,3,'f',2),(204,4,5,'f',2),(205,5,6,'f',2),(206,6,7,'f',2),(207,7,8,'f',2),(208,8,10,'f',2),(209,9,11,'f',2),(210,10,12,'f',2),(211,1,1,'g',2),(212,2,2,'g',2),(213,3,3,'g',2),(214,4,5,'g',2),(215,5,6,'g',2),(216,6,7,'g',2),(217,7,8,'g',2),(218,8,10,'g',2),(219,9,11,'g',2),(220,10,12,'g',2),(221,1,1,'h',2),(222,2,2,'h',2),(223,3,3,'h',2),(224,4,5,'h',2),(225,5,6,'h',2),(226,6,7,'h',2),(227,7,8,'h',2),(228,8,10,'h',2),(229,9,11,'h',2),(230,10,12,'h',2),(231,1,1,'i',2),(232,2,2,'i',2),(233,3,3,'i',2),(234,4,5,'i',2),(235,5,6,'i',2),(236,6,7,'i',2),(237,7,8,'i',2),(238,8,10,'i',2),(239,9,11,'i',2),(240,10,12,'i',2);
/*!40000 ALTER TABLE `seat` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `show`
--

DROP TABLE IF EXISTS `show`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `show` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `date` date DEFAULT NULL,
  `time` time DEFAULT NULL,
  `hall_id` bigint DEFAULT NULL,
  `movie_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKerxe4fq79bycr47f0miarbfm8` (`hall_id`),
  KEY `FKo4whvp6b2gf77hqjp65ru91mu` (`movie_id`),
  CONSTRAINT `FKerxe4fq79bycr47f0miarbfm8` FOREIGN KEY (`hall_id`) REFERENCES `hall` (`id`),
  CONSTRAINT `FKo4whvp6b2gf77hqjp65ru91mu` FOREIGN KEY (`movie_id`) REFERENCES `movie` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `show`
--

LOCK TABLES `show` WRITE;
/*!40000 ALTER TABLE `show` DISABLE KEYS */;
INSERT INTO `show` VALUES (1,'2021-05-18','14:30:00',2,1),(2,'2021-05-18','16:00:00',2,1),(3,'2021-05-18','15:00:00',2,2),(4,'2021-05-18','17:15:00',2,3);
/*!40000 ALTER TABLE `show` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ticket`
--

DROP TABLE IF EXISTS `ticket`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ticket` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `seat_id` bigint DEFAULT NULL,
  `show_id` bigint DEFAULT NULL,
  `ticket_status_id` bigint DEFAULT NULL,
  `ticket_type_id` bigint DEFAULT NULL,
  `user_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKqvx89u45na8jky2k3d8hsdx6w` (`seat_id`),
  KEY `FKf6wf3mk0ivhjwtvlbcfsh0q5l` (`show_id`),
  KEY `FKe1vecshxy0wdvyua3fdipqrkb` (`ticket_status_id`),
  KEY `FKrl9y7t6i3fw8r5e10kc24gqe9` (`ticket_type_id`),
  KEY `FK254q6kj8hbihd2c3sglmybyat` (`user_id`),
  CONSTRAINT `FK254q6kj8hbihd2c3sglmybyat` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  CONSTRAINT `FKe1vecshxy0wdvyua3fdipqrkb` FOREIGN KEY (`ticket_status_id`) REFERENCES `ticket_status` (`id`),
  CONSTRAINT `FKf6wf3mk0ivhjwtvlbcfsh0q5l` FOREIGN KEY (`show_id`) REFERENCES `show` (`id`),
  CONSTRAINT `FKqvx89u45na8jky2k3d8hsdx6w` FOREIGN KEY (`seat_id`) REFERENCES `seat` (`id`),
  CONSTRAINT `FKrl9y7t6i3fw8r5e10kc24gqe9` FOREIGN KEY (`ticket_type_id`) REFERENCES `ticket_type` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ticket`
--

LOCK TABLES `ticket` WRITE;
/*!40000 ALTER TABLE `ticket` DISABLE KEYS */;
INSERT INTO `ticket` VALUES (1,1,1,1,1,1),(2,240,2,2,2,1),(3,234,4,1,1,2),(4,153,4,2,1,2),(5,223,4,2,1,2),(6,212,3,1,2,2),(7,211,3,1,2,2),(8,213,3,1,2,2);
/*!40000 ALTER TABLE `ticket` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ticket_status`
--

DROP TABLE IF EXISTS `ticket_status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ticket_status` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ticket_status`
--

LOCK TABLES `ticket_status` WRITE;
/*!40000 ALTER TABLE `ticket_status` DISABLE KEYS */;
INSERT INTO `ticket_status` VALUES (1,'reserved'),(2,'paid');
/*!40000 ALTER TABLE `ticket_status` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ticket_type`
--

DROP TABLE IF EXISTS `ticket_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ticket_type` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `price` double DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ticket_type`
--

LOCK TABLES `ticket_type` WRITE;
/*!40000 ALTER TABLE `ticket_type` DISABLE KEYS */;
INSERT INTO `ticket_type` VALUES (1,'normal',18),(2,'student',14);
/*!40000 ALTER TABLE `ticket_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'user@test.com','$2a$10$J7koIvdr84r5awDBfL650eaJbhr0l78TEQkeJpYWt.dzaDMaQev7e','user'),(2,'lanabanana@email.com','$2a$10$L2ae3VASqNcfljiw7Ye3Te..UhCUpBeCzuYl8OFYhyIn079.4cUu2','lanabanana'),(3,'admin@email.com','$2a$10$LE7JAV9RGbsSa4avLA0IoOLztjXicH6NnLPKOWrEF6pw/4J5YEB86','admin'),(4,'pizzaman@email.com','$2a$10$dtGRYCuFMvv42ceFwh.tquQziHgZmzEti7ysBhFpUsEkhYWYX/4tS','pizzaman');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users_roles`
--

DROP TABLE IF EXISTS `users_roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users_roles` (
  `user_id` bigint NOT NULL,
  `role_id` bigint NOT NULL,
  KEY `FKt4v0rrweyk393bdgt107vdx0x` (`role_id`),
  KEY `FKgd3iendaoyh04b95ykqise6qh` (`user_id`),
  CONSTRAINT `FKgd3iendaoyh04b95ykqise6qh` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  CONSTRAINT `FKt4v0rrweyk393bdgt107vdx0x` FOREIGN KEY (`role_id`) REFERENCES `role` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_roles`
--

LOCK TABLES `users_roles` WRITE;
/*!40000 ALTER TABLE `users_roles` DISABLE KEYS */;
INSERT INTO `users_roles` VALUES (1,2),(2,2),(3,2),(4,2);
/*!40000 ALTER TABLE `users_roles` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-06-19 12:43:15
