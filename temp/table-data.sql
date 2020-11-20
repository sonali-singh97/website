-- MySQL dump 10.13  Distrib 8.0.22, for Linux (x86_64)
--
-- Host: localhost    Database: website
-- ------------------------------------------------------
-- Server version	8.0.22-0ubuntu0.20.04.2

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `past_events`
--

DROP TABLE IF EXISTS `past_events`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `past_events` (
  `id` int NOT NULL AUTO_INCREMENT,
  `event_image` varchar(255) DEFAULT NULL,
  `event_name` varchar(255) DEFAULT NULL,
  `event_banner` varchar(255) NOT NULL,
  `date` date DEFAULT NULL,
  `time` time DEFAULT NULL,
  `duration` int DEFAULT NULL,
  `event_info` text,
  `event_details` text,
  `event_video` varchar(255) DEFAULT NULL,
  `event_ppt` varchar(255) DEFAULT NULL,
  `speaker_name1` varchar(255) DEFAULT NULL,
  `speaker_img1` varchar(255) DEFAULT NULL,
  `speaker_name2` varchar(255) DEFAULT NULL,
  `speaker_img2` varchar(255) DEFAULT NULL,
  `speaker_name3` varchar(255) DEFAULT NULL,
  `speaker_img3` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `past_events`
--

LOCK TABLES `past_events` WRITE;
/*!40000 ALTER TABLE `past_events` DISABLE KEYS */;
INSERT INTO `past_events` VALUES (10,'info_icon.jpg','Info Session','info_banner.jpg','2020-09-27','16:00:00',1,'Introduction to Developer Students club',' The event is being organized by the DSC Team to get the students of UIET acquainted with the workings of the club. It will begin with a general and precise introduction of the club followed by a message by our respected Director Dr. CC Tripathi and Faculty Advisor Dr. Sanjeev Dhawan. A lecture by the invited Chief Guest will take place. Each and every technical domain included in the club namely Artificial Intelligence, Machine Learning, Cloud Computing, Web Development, Android Development, and Cyber security will be explained by the assigned lead. The basic aim of the Info session is to tell the students about the benefits of joining the club, the exposure they will get by being a regular and sincere member of DSC UIET, learning and becoming proficient in one, two, or all of the domains mentioned above, and lastly build solutions and projects that will benefit the society at large.  In the end, the session will be opened for questions by the audience which will be answered by the DSC Team members.','','https://www.slideshare.net/PranshuPareek3/info-session-238696652?ref=https://dsc.community.dev/','Pranshu Pareek','Pranshu Pareek.jpeg','',NULL,'',NULL),(11,'cloud-icon.jpg','Getting started with GCP ','cloud-banner.jpg','2020-10-10','17:00:00',1,'Introduction to 30 Days of Google Cloud Program.',' This session will provide you an opportunity to kickstart your career in Cloud and get all the information that you require on Google Cloud Platform - the tool that empowers apps like Google Search, Gmail and YouTube.\r\n\r\nDuring the session, you will learn concepts like cloud engineering, data science & machine learning using cloud by UIET\'s Campus Facilitator, Sakshi Tomar who is extremely proficient with Google Cloud. Get yourself trained on the program’s content by earning Qwiklabs skill badges. By joining this event and further participating in the 30 Days of Google Cloud Program, you also get a chance to win some really exciting Google Cloud goodies!!\r\nYour presence is awaited!!!','https://youtu.be/Tmo08_j5v7M','https://www.slideshare.net/KrishnanPoddar/30-days-of-google-cloud-238912768?ref=https://dsc.community.dev/','Sakshi Tomar','sakshi.jpg','',NULL,'',NULL),(12,'hactoberfest-icon.jpg','Hactoberfest 2020','hactoberfest-banner.jpg','2020-10-14','17:00:00',1,'Introduction to Hactoberfest 2020.',' The “Hacktober Fest” has been announced and we would like you all to become a part of this amazing event, that celebrates open source contributions worldwide. During the entire month of October 2020, all you have to do is contribute to any open source projects and open at least 4 pull requests. You don’t need to be an expert in programming or coding to take part in this fest. Upon successfully completing 4 pull requests, you will win an amazing Hacktoberfest T-shirt and awesome stickers.\r\n\r\nDSC UIET has organized the Hacktoberfest 2020 session to familiarize all the students of UIET with \"Hacktoberfest\" and how to ace it.','https://youtu.be/GwU8vNQgJhU','https://www.slideshare.net/PranshuPareek3/hacktoberfest-2020-238885511?ref=https://dsc.community.dev/','Simran Dhiman','simran.jpg','',NULL,'',NULL),(13,'cs-icon.jpg','Introduction to Cybersecurity','cs-banner.jpg','2020-10-24','16:00:00',1,'Introduction to Cybersecurity , Networking and Ethical hacking.',' The Introduction to Cyber Security session will provide you an opportunity to kickstart your career in Cyber Security, Networking & Ethical Hacking methods.\r\n\r\nDuring the session, you will learn concepts like IPV4 & IPV6, setting up Labs & with some hands-on practice on SQL Injections, Phishing, DOS Attacks, Wireshark, Wifi Attacks, and so on.\r\n\r\nDo join the session if you think you have a knack for cybersecurity!\r\n\r\nYour presence is highly awaited!!','','','Pratyush Ray','Pratyush.jpg','',NULL,'',NULL),(14,'dsa-icon.jpg','Getting Started with DSA','dsa-banner.jpg','2020-11-08','16:00:00',1,'Introduction to Data Structures and Algorithm program.',' Getting Started with DSA is the introductory session of the Data Structures and Algorithms program. DSA is an integral part of the interview segment of any company, hence it is very important to master it.\r\n\r\nHere, we will discuss some types of data structures and algorithms along with their implementation. Various problem-solving platforms like HackerRank, Codechef, LeetCode among many others will also be discussed.\r\n\r\nJoin the session to kickstart your journey in DSA and get your dream job!','','','Gaurav Verma','Gaurav.jpg','',NULL,'',NULL),(15,'firechat-icon.png','Learning From Experiences','firechat-banner.png','2020-11-19','17:00:00',1,'One-hour session with Siddhant Agarwal from Google Developer relations',' DSC UIET, Kurukshetra University in association with DSC India Fireside Chat Series brings before you ”Learning From Experiences”. Join us for a one-hour session with Siddhant Agarwal from Google Developer relations on 19th November 2020 at 5:00 PM IST.\r\n\r\nHe is the lead of Developers Student Clubs program, Google Developer Experts Program and TensorFlow User Groups program as part of Google Developer Relations team in India.\r\n\r\nHe has also led the strategic and execution efforts for the \"Build for Digital India\" program launched in collaboration with the Ministry of Electronics & Information Technology, Govt. of India with 7K+ students participating in and building solutions that \"Solve for India\". He has spoken at more than 150+ national and international forums impacting more than 30K students/developers/individuals in the last 3-4 years.\r\n\r\n\r\n\r\nRecord your questions and get a chance to feature in the event. \r\n\r\n\r\nSubmit your questions here: https://bit.ly/asksiddhant','','','Siddhant Agarwal','Sidhant.jfif','',NULL,'',NULL);
/*!40000 ALTER TABLE `past_events` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-11-20 15:54:42
