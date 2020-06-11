-- --------------------------------------------------------
-- Servidor:                     C:\Users\Dominique\Documents\GitHub\My Repositories\Ecoleta - Next Level Week\src\database\database.db
-- Versão do servidor:           3.30.1
-- OS do Servidor:               
-- HeidiSQL Versão:              11.0.0.5919
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES  */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- Copiando estrutura para tabela main.places
CREATE TABLE IF NOT EXISTS places (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            name TEXT,
            address TEXT,
            address2 TEXT,
            state TEXT,
            city TEXT,
            items TEXT
        );

-- Copiando dados para a tabela main.places: 3 rows
/*!40000 ALTER TABLE "places" DISABLE KEYS */;
INSERT INTO "places" ("id", "image", "name", "address", "address2", "state", "city", "items") VALUES
	(11, 'https://images.pexels.com/photos/159751/book-address-book-learning-learn-159751.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 'Reciclando', 'Rua da bandeida', '200', 'Acre', 'Rio Branco', 'Papéis e Papelão'),
	(14, 'https://images.pexels.com/photos/1660/art-creative-metal-creativity.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500', 'TopColeta', 'Rua Niteroi', '25', 'Rio de Janeiro', 'Rio das Ostras', 'Resíduos Eletrônicos,Lâmpadas'),
	(15, 'https://images.pexels.com/photos/2505705/pexels-photo-2505705.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 'Reciclaí', 'Rua das gaivotas', '324', 'Minas Gerais', 'Vargem Bonita', 'Resíduos Orgânicos,Óleo de Cozinha');
/*!40000 ALTER TABLE "places" ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
