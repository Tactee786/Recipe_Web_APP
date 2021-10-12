-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Dec 12, 2020 at 02:43 PM
-- Server version: 5.7.32
-- PHP Version: 7.3.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ob273_ci609_ass`
--

-- --------------------------------------------------------

--
-- Table structure for table `recipe`
--

CREATE TABLE `recipe` (
  `id` int(11) NOT NULL,
  `name` varchar(64) CHARACTER SET latin1 COLLATE latin1_general_ci NOT NULL,
  `ingredients` varchar(5000) CHARACTER SET latin1 COLLATE latin1_general_ci NOT NULL,
  `portion` int(11) NOT NULL,
  `preparation_time` int(11) NOT NULL,
  `cooking_time` int(11) NOT NULL,
  `instructions` text CHARACTER SET latin1 COLLATE latin1_general_ci NOT NULL,
  `images` mediumblob,
  `other` text CHARACTER SET latin1 COLLATE latin1_general_ci
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `recipe`
--

INSERT INTO `recipe` (`id`, `name`, `ingredients`, `portion`, `preparation_time`, `cooking_time`, `instructions`, `images`, `other`) VALUES
(1, 'Chicken and chorizo jambalaya', '1 tbsp olive oil, 2 chicken breasts (chopped), 1 onion (diced), 1 red peper (thinly sliced), 2 garlic cloves (crushed), 75g chorizo (sliced), 1tbsp cujan seasoning, 250g long grain rice, 400g can plum tomato, 350ml chicken stock', 4, 10, 45, 'STEP 1: Heat 1 tbsp olive oil in a large frying pan with a lid and brown 2 chopped chicken breasts for 5-8 mins until golden. STEP 2: Remove and set aside. Tip in the 1 diced onion and cook for 3-4 mins until soft. STEP 3: Add 1 thinly sliced red pepper, 2 crushed garlic cloves, 75g sliced chorizo and 1 tbsp Cajun seasoning, and cook for 5 mins more. STEP 4: Stir the chicken back in with 250g long grain rice, add the 400g can of tomatoes and 350ml chicken stock. Cover and simmer for 20-25 mins until the rice is tender.', '', 'Season to your taste.'),
(2, 'Shredded beef chilli taco', '600ml beef stock, 2 tsp ground cumin, 2 tsp ground coriander, 3 garlic cloves (finely chopped), 300ml passata, 100g chipotle chilli paste, 1.5 kg piece braising beef, 2 x 400g cans black beans or kidney beans (drained but not rinsed), 1 lime (juiced), small bunch coriander (chopped), 8 large flour tortillas', 8, 15, 360, 'STEP 1: Heat oven to 170C /150C fan/gas 4. Tip the beef stock, spices, garlic, passata and chilli paste (or tomato purÃ©e, if using) into a large flameproof casserole dish and season. Place on a medium heat, bring to a simmer, then add the beef and coat in the sauce. Cover and braise in the oven for 5-6 hrs, or until the beef is really tender. Remove from the oven and leave to rest for around 30 mins. STEP 2: Using two forks, shred the beef into the sauce. Until this point, the dish can be prepared up to three days ahead â€“ the flavours will improve over time. To reheat, stir in the beans and place on a low heat, then squeeze in the lime juice and keep warm on a low heat or in a low oven. Stir through the coriander just before serving. STEP 3: To make the taco bowls, heat oven to 190C/170C fan/ gas 5. Brush each tortilla with a little oil, then tuck into a small ovenproof bowl or pudding basin and hold in place with a ball of foil. Cook for 8-12 mins until crisp. This can be done in batches if needed. If cooking ahead, leave to cool and keep in a large airtight container overnight. To serve, half-fill the tacos with the red cabbage & pickled chilli slaw, top with the chilli and sprinkle with your choice of toppings.', '', 'Soured cream or plain yogurt, lime wedges, diced avocado or guacamole, finely sliced red onion, sliced red chilli, sliced radishes, chopped tomato, crumbled feta or grated mild cheddar.'),
(3, 'Speedy nachos', '175g packet plain tortilla chips, 225g jar salsa, a few sliced spring onions, a good chunk of cheese, a pinch of crushed chilli flakes', 3, 3, 4, 'STEP 1: Tip tortilla chips on to a baking tray, pour over salsa and scatter over a few sliced spring onions. STEP 2: Grate over a good chunk of cheese (fontina is perfect, but cheddar will do). Add a pinch of crushed chilli flakes, then put under a hot grill for about 4 minutes to melt the cheese.', '', 'Serve with soured cream or guacamole. (optional)'),
(4, 'Egg fried rice', '250g long grain rice, 3 tbsp vegetable oil, 1 onion (finely chopped), 4 eggs (beaten), 2 spring onions (sliced to serve)', 4, 10, 10, 'STEP 1: Cook the rice following pack instructions, then drain, spread it out to steam-dry and set aside. STEP 2: Heat 2 tbsp of the oil in a large wok over a high heat, then add the onion and fry until lightly browned, around 5 mins. Add the rice, stir and toast for about 3 mins, then move to the side of the pan. STEP 3: Add the remaining oil, then tip in the egg mixture. Leave to cook a little, then mix in with the rice â€“ stir vigorously to coat the grains or, if you prefer the egg chunkier, allow to set for a little longer before breaking up and stirring through. Tip into a serving bowl and scatter over the spring onion to serve.', '', 'Season to your liking.'),
(5, 'Creamy mashed potatoes', '1Â½ kg floury potato, such as King Edward or Maris Piper (cut into even chunks), 125ml semi-skimmed milk, 1 tbsp butter, 4 tbsp crÃ¨me fraÃ®che', 6, 10, 15, 'STEP 1: Bring a large saucepan of water to the boil. Add the potatoes and boil for about 15 mins or until tender. Transfer to a colander and drain well, then return to the pan and set over a very low heat for 2 mins to dry completely. STEP 2: Heat the milk and butter in a small pan, then pour over the potatoes. Remove from the heat, then mash potatoes using an electric hand whisk or potato masher. Tip in the crÃ©me fraÃ®che and beat with a wooden spoon until smooth and creamy. Season with pepper and a pinch of salt.', '', ''),
(6, 'Chicken pasta bake', '4 tbsp olive oil, 1 onion (finely chopped), 2 garlic cloves (crushed), Â¼ tsp chilli flakes, 2 x 400g cans chopped tomatoes, 1 tsp caster sugar, 6 tbsp mascarpone, 4 skinless chicken breasts (sliced into strips), 300g penne, 70g mature cheddar (grated), 50g grated mozzarella, Â½ small bunch of parsley (finely chopped)', 6, 30, 45, 'STEP 1: Heat 2 tbsp of the oil in a pan over a medium heat and fry the onion gently for 10-12 mins. Add the garlic and chilli flakes and cook for 1 min. Tip in the tomatoes and sugar and season to taste. Simmer uncovered for 20 mins or until thickened, then stir through the mascarpone. STEP 2: Heat 1 tbsp of oil in a non-stick frying pan. Season the chicken and fry for 5-7 mins or until the chicken is cooked through. STEP 3: Heat the oven to 220C/200C fan/gas 7. Cook the penne following pack instructions. Drain and toss with the remaining oil. Tip the pasta into a medium sized ovenproof dish. Stir in the chicken and pour over the sauce. Top with the cheddar, mozzarella and parsley. Bake for 20 mins or until golden brown and bubbling. ', '', 'Sesson to your taste.'),
(7, 'Egg and cress club sandwich', '2 eggs, 2 tbsp mayonnaise, 3 slices bread, a little butter, â…“ carton of cress, 2-3 slices of tomato or a lettuce leaf or cheese', 1, 10, 10, 'STEP 1: Bring a pan of water to the boil and carefully lower in the eggs. Cook for 6 mins, then cool under running water until they can be peeled. Peel the eggs, then leave to cool completely. STEP 2: Mash or chop the eggs, then mix with 1Â½ tbsp mayonnaise and some seasoning, if you like. Toast the bread. STEP 3: Lay one slice of bread on a board. Butter it, then spread on three quarters of the egg and scatter over the cress. Add another slice of toast and gently spread on the remaining mayo. Add the tomato or lettuce or cheese (or whichever combination you prefer). Dot the remaining egg over the top, spread gently, then top with the final piece of toast. Cut the crusts off if you like, then gently cut the sandwich into four quarters, being careful not to squash out the egg. Skewer each sandwich with a sandwich pick. ', '', ''),
(8, 'Lamb koftas', '500g lamb mince, 1 tsp ground cumin, 2 tsp ground coriander, 2 fat garlic cloves (crushed), 1 tbsp chopped mint, oil for brushing', 8, 15, 15, 'STEP 1: Mix together all the ingredients until well blended. Divide into eight balls, then roll each ball on a board with a cupped hand to turn them into ovals. Thread onto four metal skewers and brush with oil. STEP 2: To cook on a griddle: heat the pan until you can feel a good heat rising and cook for 3-4 mins each side. Donâ€™t turn until they are well sealed or the meat will stick to the grill or pan. STEP 3: Season if you want, and set aside. Serve the koftas with yogurt and spiced flat breads.', '', 'To BBQ: Put the meat skewers on the grill over a medium heat for about 3-4 mins each side.'),
(9, 'Vegan sausage rolls', '250g chestnut mushrooms, 3 tbsp olive oil, 2 leeks (finely chopped), 2 large garlic cloves (crushed), 1 tbsp finely chopped sage leaves, 1 tbsp brown rice miso, 2 tsp Dijon mustard, 30g chestnuts (very finely chopped), 70g fresh white breadcrumbs, 1 x 320g sheet ready-rolled puff pastry (not the all-butter version), plain flour for dusting, dairy-free milk (like soya milk to glaze)', 10, 20, 50, 'STEP 1: Tip the mushrooms into a food processor and pulse until they are very finely chopped. Put half the olive oil in a large frying pan, add the leeks along with a pinch of salt and fry gently for 15 mins or until softened and golden brown. Scrape the leeks out of the pan, into a bowl and set aside to cool a little. STEP 2: Heat the remaining oil in the pan and fry the mushrooms for 10 mins over a medium heat. Add the garlic, sage, miso and mustard, and fry for a further minute. Leave to cool slightly. STEP 3: Heat the oven to 200C/180C fan/gas 6. Tip the mushroom mixture into the bowl with the leeks, then add the chestnuts and breadcrumbs. Season, then mix everything together until you have a slightly stiff mixture. STEP 4: Unravel the pastry on a floured surface, then roll the pastry out so that one side measures 43 cm. Mould the mushroom and leek mixture into a sausage shape down the centre of the pastry, then bring the pastry up around the filling and seal along the seam with a fork. Cut into ten pieces. Lay on a parchment-lined baking sheet and brush each piece with milk. Bake for 25 mins or until deep, golden brown. Leave to cool a little and sprinkle with sesame seeds before serving.', '', ''),
(10, 'Chicken and houmous wraps', '2 tsp cumin seeds, 8 free-range skinless boneless chicken thighs, Olive oil for brushing, 2 medium carrots, 8 flour tortillas, 200g tub houmous, 1 lemon, Bunch fresh coriander', 4, 10, 15, 'STEP 1: Roughly crush the cumin seeds in a pestle and mortar. Open out the chicken thighs and flatten slightly with your hand. Brush with a little oil and sprinkle with the crushed cumin seeds. Season. Heat a griddle pan until hot and cook the chicken for 5-6 minutes on each side until tender and cooked through. Cover with foil until ready to serve. STEP 2: Coarsely grate the carrots. Microwave the tortillas for 10 seconds until just warm, or warm briefly on each side in a large, dry frying pan. STEP 3: Slice the chicken into strips. Spread the houmous thickly over the tortillas. Divide the chicken and grated carrot among them. Squeeze some lemon juice over each one, followed by a sprinkle of fresh coriander leaves. Fold in the sides, then roll tightly. Cut in half and eat while warm.', '', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `recipe`
--
ALTER TABLE `recipe`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `recipe`
--
ALTER TABLE `recipe`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
