// Styles
import './Hero.css';
// Assets
import Orlando from '../../assets/Orlando.jpg';
// Icons
import Figma from '../../assets/TechIcons/iconFigma.svg';
import HTML5 from '../../assets/TechIcons/iconHTML5.svg';
import CSS from '../../assets/TechIcons/iconCSS.svg';
import JS from '../../assets/TechIcons/iconJS.svg';
import React from '../../assets/TechIcons/iconReact.svg';
import TailWindCSS from '../../assets/TechIcons/iconTailWindCSS.svg';
// Components
import { Button } from '../objectComponent/Button';

export const Hero = () => {
  return (
    <div className='Hero'>
      <div className='yo'>
        <div className='desc'>
          <h1>Desarrollador Web</h1>
          <p>
            Hola, soy Orlando Jiménez. Un desarrollador Front-End que reside en
            Jalisco, México.
          </p>
          <div className='botones'>
            <Button
              text={'Contáctame'}
              class={'primary'}
              click={() => {
                const dialog = document.querySelector(
                  'dialog'
                ) as HTMLDialogElement;
                dialog?.showModal();
              }}
            />
            <Button
              text={'Experiencia'}
              class={'secundary'}
              click={() => {
                document
                  .querySelector('.Proyectos')
                  ?.scrollIntoView({ behavior: 'smooth' });
              }}
            />
          </div>
        </div>
        <img src={Orlando} alt='Orlando' />
      </div>

      <div className='tech'>
        <div className='techText'>
          <span>Tecnologías</span>
          <div className='verticalLine'></div>
        </div>

        <div className='techs'>
          <img src={Figma} alt='Figma' />
          <img src={HTML5} alt='HTML5' />
          <img src={CSS} alt='CSS' />
          <img src={JS} alt='JS' />
          <img src={React} alt='React' />
          <img src={TailWindCSS} alt='TailWindCSS' />
        </div>

        <Button
          text='Ver Más'
          class='tertiary'
          click={() => {
            const dialog = document.querySelector(
              'dialog'
            ) as HTMLDialogElement;
            dialog?.showModal();
          }}
        />
      </div>
    </div>
  );
};
