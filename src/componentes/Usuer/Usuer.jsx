import styles from './Usuer.module.css'
import Perfil from './img/perfil.jpg'

export function Usuer(){
  return (
    <div className={styles.container}>
      <img src={Perfil} alt="Homem moreno de óculos e boné e camisa vermelha" />

      <h2> Carlos Alcides </h2>

      <p id='home'>
        Desde jovem, trilhei um caminho diversificado no mundo do trabalho. Meu primeiro registro em carteira veio aos 20 anos, quando entrei para uma padaria. Durante mais de 7 anos, aprendi os segredos da panificação e servi nossa comunidade com pães frescos e sorrisos.
      </p>
      <p>
        Em seguida, mudei para o estoque de uma loja de roupas. Durante 1 ano, organizei peças, conferi estoques e aprendi sobre o varejo. Foi uma experiência valiosa que me ensinou a importância da organização e da eficiência.
      </p>
			<p>
				Minha jornada tomou um rumo autônomo quando me tornei costureiro. Por 3 anos, trabalhei com agulha e linha, criando peças únicas e expressando minha criatividade. Embora tenha sido desafiador, a liberdade de ser meu próprio chefe foi gratificante.
			</p>
			<p>
				Mas a vida é cheia de reviravoltas. Quando as coisas não estavam indo como planejado, aceitei uma posição de faxineiro em um mercado. Durante 6 meses, varri corredores, limpei prateleiras e conheci colegas incríveis. Foi nesse momento que me deparei com a área da segurança.
			</p>
			<p>
				Decidi investir em mim mesmo e fiz um curso na área. Desde então, estou na mesma empresa, dedicando 10 anos ao setor de segurança. Como profissional de segurança, aprendi a proteger, prevenir e cuidar das pessoas. Cada dia é uma oportunidade para aprender e crescer.
			</p>
			<p>
				Minha trajetória é uma prova de que a versatilidade e a perseverança são essenciais para o sucesso. Estou ansioso para continuar contribuindo e aprendendo, seja qual for o próximo capítulo dessa história! 
			</p>
    </div>
  )
}