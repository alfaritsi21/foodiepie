-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 07 Sep 2020 pada 13.30
-- Versi server: 10.1.38-MariaDB
-- Versi PHP: 7.3.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `foodiepie`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `category`
--

CREATE TABLE `category` (
  `category_id` int(11) NOT NULL,
  `category_name` varchar(100) NOT NULL,
  `category_created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `category_updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `category_status` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `category`
--

INSERT INTO `category` (`category_id`, `category_name`, `category_created_at`, `category_updated_at`, `category_status`) VALUES
(1, 'Main Dish', '2020-08-13 06:51:02', '0000-00-00 00:00:00', 1),
(2, 'Drinks', '2020-08-13 06:51:02', '0000-00-00 00:00:00', 1),
(3, 'Dessert', '2020-08-13 07:50:09', '0000-00-00 00:00:00', 1),
(4, 'Soft Drink', '2020-08-13 09:15:15', '2020-08-16 21:03:35', 0),
(5, 'Makanan Utama', '2020-08-18 04:08:27', '2020-08-18 04:09:59', 0),
(6, 'Sweety Gold', '2020-09-05 12:42:47', '2020-09-05 12:51:23', 0);

-- --------------------------------------------------------

--
-- Struktur dari tabel `history`
--

CREATE TABLE `history` (
  `history_id` int(11) NOT NULL,
  `invoice` varchar(11) NOT NULL,
  `history_subtotal` int(11) NOT NULL,
  `history_created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `history_updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `history_status` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `history`
--

INSERT INTO `history` (`history_id`, `invoice`, `history_subtotal`, `history_created_at`, `history_updated_at`, `history_status`) VALUES
(1, 'ARQ-362500', 320000, '2020-08-14 17:00:00', '0000-00-00 00:00:00', 1),
(2, 'ARQ-350250', 352000, '2020-08-15 17:00:00', '0000-00-00 00:00:00', 1),
(3, 'ARQ-385000', 336600, '2020-08-16 17:00:00', '0000-00-00 00:00:00', 1),
(4, 'ARQ-820250', 442200, '2020-08-17 17:00:00', '0000-00-00 00:00:00', 1),
(5, 'ARQ-558750', 442200, '2020-08-20 17:00:00', '0000-00-00 00:00:00', 1),
(6, 'ARQ-111111', 442200, '2020-08-23 17:00:00', '0000-00-00 00:00:00', 1),
(7, 'ARQ-719750', 35200, '2020-08-23 17:00:00', '0000-00-00 00:00:00', 1),
(8, 'ARQ-141750', 111100, '2020-08-24 17:00:00', '0000-00-00 00:00:00', 1),
(9, 'ARQ-1203250', 138600, '2020-08-25 17:00:00', '0000-00-00 00:00:00', 1),
(10, 'ARQ-468250', 135300, '2020-08-26 17:00:00', '0000-00-00 00:00:00', 1),
(11, 'ARQ-210250', 90200, '2020-08-27 17:00:00', '0000-00-00 00:00:00', 1),
(12, 'ARQ-111111', 442200, '2020-08-28 17:00:00', '0000-00-00 00:00:00', 1),
(13, 'ARQ-772750', 112200, '2020-08-30 07:48:38', '0000-00-00 00:00:00', 1),
(14, 'ARQ-111500', 235400, '2020-08-30 07:48:56', '0000-00-00 00:00:00', 1),
(15, 'ARQ-254500', 44000, '2020-08-30 08:32:03', '0000-00-00 00:00:00', 1),
(16, 'ARQ-83000', 29700, '2020-08-30 08:37:23', '0000-00-00 00:00:00', 1),
(18, 'ARQ-279500', 53900, '2020-08-30 14:53:47', '0000-00-00 00:00:00', 1),
(19, 'ARQ-788250', 114400, '2020-08-30 15:02:48', '0000-00-00 00:00:00', 1),
(20, 'ARQ-17750', 107800, '2020-08-30 16:30:02', '0000-00-00 00:00:00', 1),
(21, 'ARQ-1058250', 157300, '2020-08-31 01:36:22', '0000-00-00 00:00:00', 1),
(22, 'ARQ-35500', 55000, '2020-08-31 01:37:12', '0000-00-00 00:00:00', 1),
(23, 'ARQ-763250', 24200, '2020-08-31 02:28:15', '0000-00-00 00:00:00', 1),
(24, 'ARQ-355000', 118800, '2020-08-31 02:28:51', '0000-00-00 00:00:00', 1),
(25, 'ARQ-577750', 90200, '2020-08-31 02:30:01', '0000-00-00 00:00:00', 1),
(26, 'ARQ-440750', 40700, '2020-08-31 03:12:39', '0000-00-00 00:00:00', 1),
(27, 'ARQ-174500', 36300, '2020-08-31 03:25:25', '0000-00-00 00:00:00', 1);

-- --------------------------------------------------------

--
-- Struktur dari tabel `orders`
--

CREATE TABLE `orders` (
  `order_id` int(11) NOT NULL,
  `history_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `ppn` int(11) NOT NULL,
  `order_total` int(11) NOT NULL,
  `order_status` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `orders`
--

INSERT INTO `orders` (`order_id`, `history_id`, `product_id`, `quantity`, `ppn`, `order_total`, `order_status`) VALUES
(1, 1, 1, 2, 2000, 20000, 1),
(2, 1, 8, 2, 12000, 120000, 1),
(3, 1, 7, 3, 18000, 180000, 1),
(4, 2, 1, 2, 2000, 20000, 1),
(5, 2, 8, 2, 12000, 120000, 1),
(6, 2, 7, 3, 18000, 180000, 1),
(7, 3, 4, 2, 6600, 66000, 1),
(8, 3, 6, 2, 6000, 60000, 1),
(9, 3, 8, 3, 18000, 180000, 1),
(10, 4, 5, 3, 8400, 84000, 1),
(11, 4, 9, 2, 13800, 138000, 1),
(12, 4, 8, 3, 18000, 180000, 1),
(13, 5, 5, 3, 8400, 84000, 1),
(14, 5, 9, 2, 13800, 138000, 1),
(15, 5, 8, 3, 18000, 180000, 1),
(16, 6, 5, 3, 8400, 84000, 1),
(17, 6, 9, 2, 13800, 138000, 1),
(18, 6, 8, 3, 18000, 180000, 1),
(19, 7, 3, 1, 500, 5000, 1),
(20, 7, 2, 1, 1700, 17000, 1),
(21, 7, 1, 1, 1000, 10000, 1),
(22, 8, 3, 2, 1000, 10000, 1),
(23, 8, 2, 3, 5100, 51000, 1),
(24, 8, 1, 4, 4000, 40000, 1),
(25, 9, 1, 4, 4000, 40000, 1),
(26, 9, 5, 2, 5600, 56000, 1),
(27, 9, 6, 1, 3000, 30000, 1),
(28, 10, 1, 4, 4000, 40000, 1),
(29, 10, 11, 1, 6500, 65000, 1),
(30, 10, 14, 2, 1800, 18000, 1),
(31, 11, 1, 1, 1000, 10000, 1),
(32, 11, 2, 1, 1700, 17000, 1),
(33, 11, 20, 1, 3200, 32000, 1),
(34, 11, 19, 1, 2300, 23000, 1),
(35, 12, 5, 3, 8400, 84000, 1),
(36, 12, 9, 2, 13800, 138000, 1),
(37, 12, 8, 3, 18000, 180000, 1),
(38, 13, 20, 1, 3200, 32000, 1),
(39, 13, 16, 4, 4000, 40000, 1),
(40, 13, 18, 2, 2400, 24000, 1),
(41, 13, 21, 1, 600, 6000, 1),
(42, 14, 15, 1, 1100, 11000, 1),
(43, 14, 11, 1, 6500, 65000, 1),
(44, 14, 8, 1, 6000, 60000, 1),
(45, 14, 9, 1, 6900, 69000, 1),
(46, 14, 14, 1, 900, 9000, 1),
(47, 15, 2, 2, 3400, 34000, 1),
(48, 15, 21, 1, 600, 6000, 1),
(49, 16, 1, 1, 1000, 10000, 1),
(50, 16, 2, 1, 1700, 17000, 1),
(51, 18, 3, 1, 500, 5000, 1),
(52, 18, 24, 1, 3200, 32000, 1),
(53, 18, 18, 1, 1200, 12000, 1),
(54, 19, 25, 2, 1800, 18000, 1),
(55, 19, 24, 2, 6400, 64000, 1),
(56, 19, 18, 1, 1200, 12000, 1),
(57, 19, 16, 1, 1000, 10000, 1),
(58, 20, 2, 1, 1700, 17000, 1),
(59, 20, 3, 1, 500, 5000, 1),
(60, 20, 20, 2, 6400, 64000, 1),
(61, 20, 21, 2, 1200, 12000, 1),
(62, 21, 1, 3, 3000, 30000, 1),
(63, 21, 2, 2, 3400, 34000, 1),
(64, 21, 3, 2, 1000, 10000, 1),
(65, 21, 5, 1, 2800, 28000, 1),
(66, 21, 6, 1, 3000, 30000, 1),
(67, 21, 15, 1, 1100, 11000, 1),
(68, 22, 3, 1, 500, 5000, 1),
(69, 22, 2, 1, 1700, 17000, 1),
(70, 22, 5, 1, 2800, 28000, 1),
(71, 23, 3, 1, 500, 5000, 1),
(72, 23, 2, 1, 1700, 17000, 1),
(73, 24, 3, 1, 500, 5000, 1),
(74, 24, 2, 1, 1700, 17000, 1),
(75, 24, 5, 2, 5600, 56000, 1),
(76, 24, 6, 1, 3000, 30000, 1),
(77, 25, 2, 1, 1700, 17000, 1),
(78, 25, 4, 1, 3300, 33000, 1),
(79, 25, 24, 1, 3200, 32000, 1),
(80, 26, 2, 1, 1700, 17000, 1),
(81, 26, 1, 2, 2000, 20000, 1),
(82, 27, 4, 1, 3300, 33000, 1);

-- --------------------------------------------------------

--
-- Struktur dari tabel `product`
--

CREATE TABLE `product` (
  `product_id` int(11) NOT NULL,
  `product_name` varchar(100) NOT NULL,
  `product_price` int(50) NOT NULL,
  `category_id` int(11) NOT NULL,
  `product_image` varchar(255) NOT NULL,
  `product_created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `product_updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `product_status` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `product`
--

INSERT INTO `product` (`product_id`, `product_name`, `product_price`, `category_id`, `product_image`, `product_created_at`, `product_updated_at`, `product_status`) VALUES
(1, 'Espresso Latte', 20000, 2, '0', '2020-08-12 13:34:06', '2020-08-31 03:14:55', 0),
(2, 'Coffee Latte', 17000, 2, '0', '2020-08-12 13:34:53', '2020-08-26 08:05:50', 1),
(3, 'Cappucino', 5000, 2, '0', '2020-08-12 13:35:18', '0000-00-00 00:00:00', 1),
(4, 'Red Velvet Latte', 33000, 3, '0', '2020-08-12 13:35:46', '2020-08-13 15:53:40', 1),
(5, 'Choco Rhum', 28000, 3, '0', '2020-08-12 13:36:07', '2020-08-13 15:55:13', 1),
(6, 'Black Forest', 30000, 3, '0', '2020-08-12 13:36:29', '2020-08-13 15:55:33', 1),
(7, 'Fanta', 8000, 2, '0', '2020-08-12 13:36:58', '2020-09-01 10:49:54', 1),
(8, 'Salmon Truffle Teriyaki', 60000, 1, '0', '2020-08-12 13:37:24', '0000-00-00 00:00:00', 1),
(9, 'Wiener Schnitzel', 69000, 1, '0', '2020-08-12 13:37:53', '0000-00-00 00:00:00', 1),
(10, 'pudding', 23000, 3, '0', '2020-08-13 15:35:50', '0000-00-00 00:00:00', 1),
(11, 'Brownies', 65000, 3, '0', '2020-08-16 20:23:00', '2020-08-26 08:07:39', 1),
(12, 'Fanta', 8000, 2, '2020-09-01T22-17-04.203Z-Capture3.PNG', '2020-08-18 04:15:19', '2020-09-01 22:17:04', 1),
(13, 'Finto', 8000, 2, '0', '2020-08-25 12:50:46', '0000-00-00 00:00:00', 0),
(14, 'Chimory', 9000, 2, '0', '2020-08-25 13:03:55', '0000-00-00 00:00:00', 1),
(15, 'Mogu Mogu', 11000, 2, '0', '2020-08-25 13:05:05', '0000-00-00 00:00:00', 1),
(16, 'Milky Chocolate', 13000, 2, '2020-09-05T12-31-07.121Z-Rectangle 6.png', '2020-08-26 06:41:37', '2020-09-05 12:31:07', 1),
(18, 'Milky way', 12000, 2, '0', '2020-08-26 08:06:36', '2020-08-26 08:24:40', 1),
(19, 'Chicken Muffin', 23000, 1, '0', '2020-08-27 07:40:54', '0000-00-00 00:00:00', 0),
(20, 'Sausage McMuffin', 32000, 1, '0', '2020-08-27 07:42:18', '0000-00-00 00:00:00', 0),
(21, 'Muffin', 6000, 3, '0', '2020-08-29 14:23:17', '0000-00-00 00:00:00', 0),
(22, 'Supermie', 7000, 1, '0', '2020-08-30 09:34:41', '0000-00-00 00:00:00', 0),
(23, 'Gurimie', 8000, 1, '0', '2020-08-30 09:35:34', '0000-00-00 00:00:00', 0),
(24, 'Chicken Soup', 32000, 1, '0', '2020-08-30 09:44:02', '0000-00-00 00:00:00', 0),
(25, 'Lemon Tea', 9000, 2, '0', '2020-08-30 09:55:28', '0000-00-00 00:00:00', 0),
(26, 'Moccacino', 14000, 2, '0', '2020-08-30 14:54:40', '0000-00-00 00:00:00', 0),
(27, 'Vanilla Latte', 16000, 2, '0', '2020-08-30 14:54:58', '0000-00-00 00:00:00', 0),
(28, 'Chococinola', 21000, 2, '0', '2020-08-30 15:02:21', '2020-08-30 15:02:31', 0),
(29, 'Chocolate Muffines', 15000, 3, '0', '2020-08-31 01:38:56', '2020-08-31 01:39:10', 0),
(30, 'Banana Nugget', 25000, 3, '0', '2020-08-31 03:14:09', '0000-00-00 00:00:00', 1),
(31, 'Milk Coffee', 17000, 2, '', '2020-09-01 08:16:43', '0000-00-00 00:00:00', 1),
(32, 'Milk Coffee', 17000, 2, '2020-09-01T08-29-56.117Z-Capture1.PNG', '2020-09-01 08:29:56', '0000-00-00 00:00:00', 1),
(33, 'Carrebian Chocolate', 17000, 2, '2020-09-05T12-25-59.723Z-20-600x300.png', '2020-09-05 12:26:00', '0000-00-00 00:00:00', 1),
(34, 'Vanilla Blue', 17000, 2, '2020-09-05T12-29-33.969Z-20-600x300.png', '2020-09-05 12:29:33', '0000-00-00 00:00:00', 1),
(35, 'Red Vanilla', 17000, 2, '2020-09-05T12-30-23.534Z-20-600x300.png', '2020-09-05 12:30:23', '0000-00-00 00:00:00', 1),
(36, 'Green Tea Latte', 25000, 2, '2020-09-07T03-17-06.308Z-Penguins.jpg', '2020-09-07 01:38:27', '2020-09-07 03:17:06', 1),
(37, 'Thai tea', 18000, 2, '2020-09-07T03-00-34.856Z-wallpaperflare.com_wallpaper (6).jpg', '2020-09-07 03:00:35', '0000-00-00 00:00:00', 1),
(38, 'Fried Chicken Hot', 25000, 1, '2020-09-07T03-10-11.100Z-Koala.jpg', '2020-09-07 03:08:40', '2020-09-07 03:10:11', 1);

-- --------------------------------------------------------

--
-- Struktur dari tabel `user`
--

CREATE TABLE `user` (
  `user_id` int(11) NOT NULL,
  `user_email` varchar(150) NOT NULL,
  `user_password` varchar(255) NOT NULL,
  `user_name` varchar(100) NOT NULL,
  `user_role` int(1) NOT NULL,
  `user_status` int(1) NOT NULL,
  `user_created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `user_updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `user`
--

INSERT INTO `user` (`user_id`, `user_email`, `user_password`, `user_name`, `user_role`, `user_status`, `user_created_at`, `user_updated_at`) VALUES
(1, 'arqi@gmail.com', '$2b$10$41X9.yi5ZTzBn4GGkNgIOu5j4BD3DyMfOgtgIr1e7z0ivhBPslaY.', 'arqi', 2, 0, '2020-09-01 04:05:31', '0000-00-00 00:00:00'),
(2, 'alfaritsi@gmail.com', '$2b$10$Y8i75XNYhgUHsVvSIuNZ9OQa41.Q.A3B5pQvXSP0sm978eXfxDqIG', 'alfaritsi', 2, 0, '2020-09-04 04:20:35', '0000-00-00 00:00:00'),
(3, 'alfaritsi21@gmail.com', '$2b$10$uFJxRh9I7yTT7OCBTarErOYmHZwIP4Ns9PYaCcL7H51G8IiYmyWhe', 'aku', 2, 0, '2020-09-04 04:27:53', '0000-00-00 00:00:00'),
(6, 'alfaritsi213@gmail.com', '$2b$10$Rs.ZmWrgpKh60qvF/lK9HuasnV1hJU07fzUgPUwHv/MWFsI0jERMm', 'me', 2, 1, '2020-09-04 11:44:22', '0000-00-00 00:00:00'),
(12, 'admin@foodiepie.com', '$2b$10$j0osE5Dbe7v32MTn7gg7bubtrEB93HcnCyQBpZRafXU/wunjm.jg6', 'admin', 1, 1, '2020-09-04 14:47:22', '0000-00-00 00:00:00'),
(13, 'user1@foodiepie.com', '$2b$10$YFfOXXDobR7nVvO3umGSJeXEISkBwPGSIIcrUi/pVr.heUZiTywya', 'user1', 2, 1, '2020-09-07 01:32:04', '0000-00-00 00:00:00'),
(14, 'user3@foodiepie.com', '$2b$10$USHgd.uy0eTRNyDIQTW6Au/pmBIg6EWXPgq1p9u238Lkf9qeMjkoO', 'user3', 2, 1, '2020-09-07 02:57:27', '0000-00-00 00:00:00');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`category_id`);

--
-- Indeks untuk tabel `history`
--
ALTER TABLE `history`
  ADD PRIMARY KEY (`history_id`);

--
-- Indeks untuk tabel `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`order_id`),
  ADD KEY `product_id` (`product_id`),
  ADD KEY `history_id` (`history_id`);

--
-- Indeks untuk tabel `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`product_id`),
  ADD KEY `category_id` (`category_id`),
  ADD KEY `category_id_2` (`category_id`);

--
-- Indeks untuk tabel `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `category`
--
ALTER TABLE `category`
  MODIFY `category_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT untuk tabel `history`
--
ALTER TABLE `history`
  MODIFY `history_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT untuk tabel `orders`
--
ALTER TABLE `orders`
  MODIFY `order_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=83;

--
-- AUTO_INCREMENT untuk tabel `product`
--
ALTER TABLE `product`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- AUTO_INCREMENT untuk tabel `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`),
  ADD CONSTRAINT `orders_ibfk_2` FOREIGN KEY (`history_id`) REFERENCES `history` (`history_id`);

--
-- Ketidakleluasaan untuk tabel `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `product_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `category` (`category_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
