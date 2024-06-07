import styles from './Navbar.module.css'

import Logo from './img/logo.png'

export function Navbar(){
  return(
    <div className={styles.container}>
			<div className={styles.logo}>
				<img src={Logo} alt="Logo" title='Logo' />
				<h1 >MinhaListaDeCompras.com.br</h1> 
			</div>
			
			<div className={styles.navegacao}>
				
				<nav >
					<ul>
						<li>
							<a href="#home">Home</a>
						</li>
						<li>
							<a href="#quem-somos">Quem somos</a>
						</li>
						<li>
							<a href="#contato">Contato</a>
						</li>
					</ul>
				</nav>
			</div>

    </div>
		
		

	)
}