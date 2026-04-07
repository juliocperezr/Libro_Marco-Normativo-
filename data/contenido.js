const contenido = [
{
    tema: "1.3 Marco Normativo",
    subtemas: [

        /* =========================
           ÁMBITO INTERNACIONAL
        ========================== */
        {
            titulo: " 1.3.1 Ámbito Internacional (1)",
            pagina: `
            <div class="banner">Ámbito Internacional</div>

            <h3 style="color:red;">Convención Americana sobre Derechos Humanos</h3>

            <p> En la Parte I - Deberes de los estados y derechos protegidos, Capítulo II - Derechos civiles y políticos, señala. </p>

            <p><strong>Artículo 19. Derechos del Niño.</strong> Todo niño tiene derecho a las medidas de protección que su condición de menor requiere por parte de su familia, de la sociedad y del Estado.</p>

<p> De igual manera en su Parte I - Deberes de los estados y derechos protegidos, Capítulo V. deberes de las personas, estipula.</p>

 <p><strong>Artículo 32. Correlación entre Deberes y Derechos.</strong></p>
       <ul>
          <li>  <p>Toda persona tiene deberes para con la familia, la comunidad y la humanidad.</p> </li> 

        <li>     <p> Los derechos de cada persona están limitados por los derechos de los demás, por la seguridad de todos y por las justas exigencias del bien común, en una sociedad democrática.</p> </li> 
</ul>

<h3>Convención sobre los derechos del niño</h3>

<p><strong>En la parte I, el artículo 2, establece.</strong></p>
 <p> 1. Los Estados Partes respetarán los derechos enunciados en la presente Convención y asegurarán su aplicación a cada niño sujeto a su jurisdicción, sin distinción alguna, independientemente de la raza, el color, el sexo, el idioma, la religión, la opinión política o de otra índole, el origen nacional, étnico o social, la posición económica, los impedimentos físicos, el nacimiento o cualquier otra condición del niño, de sus padres o de sus representantes legales.
[...]
</p>

<p><strong>En la parte I, el artículo 3, dice.</strong></p>
 <p> 1. En todas las medidas concernientes a los niños que tomen las instituciones públicas o privadas de bienestar social, los tribunales, las autoridades administrativas o los órganos legislativos, una consideración primordial a que se atenderá será el interés superior del niño.</p>

 <p> 2. Los Estados Partes se comprometen a asegurar al niño la protección y el cuidado que sean necesarios para su bienestar, teniendo en cuenta los derechos y deberes de sus padres, tutores u otras personas responsables de él ante la ley y, con ese fin, tomarán todas las medidas legislativas y administrativas adecuadas.</p>

<p> 3. Los Estados Partes se asegurarán de que las instituciones, servicios y establecimientos encargados del cuidado o la protección de los niños cumplan las normas establecidas por las autoridades competentes, especialmente en materia de seguridad, sanidad, número y competencia de su personal, así como en relación con la existencia de una supervisión adecuada.</p>

<p><strong>En la parte I, el artículo 19, indica.</strong></p>
 <p> 1. Los Estados Partes adoptarán todas las medidas legislativas, administrativas, sociales y educativas apropiadas para proteger al niño contra toda forma de perjuicio o abuso físico o mental, descuido o trato negligente, malos tratos o explotación, incluido el abuso sexual, mientras el niño se encuentre bajo la custodia de los padres, de un representante legal o de cualquier otra persona que lo tenga a su cargo.
[...]</p>

            `
        },
  /* =========================

        {
            titulo: "Ámbito Internacional (2)",
            pagina: `
            <div class="banner">Convención sobre los Derechos del Niño</div>

            <p><strong>Artículo 2:</strong> Se garantizarán los derechos sin distinción alguna.</p>

            <p><strong>Artículo 3:</strong> El interés superior del niño será la consideración primordial.</p>

            <p><strong>Artículo 19:</strong> Protección contra abuso físico o mental, descuido o explotación.</p>

            <p><strong>Artículo 34:</strong> Protección contra explotación sexual.</p>
            `
        },
        {
            titulo: "Ámbito Internacional (3)",
            pagina: `
            <div class="banner">Convenciones Internacionales</div>

            <h3>Convención de Belém do Pará</h3>
            <p>Promueve la erradicación de la violencia contra la mujer mediante educación y programas sociales.</p>

            <h3>CEDAW</h3>
            <p>Busca eliminar la discriminación contra la mujer en educación y sociedad.</p>

            <p>Promueve igualdad de derechos y eliminación de estereotipos.</p>
            `
        },

        /* =========================
           ÁMBITO NACIONAL
        ========================== */
        {
            titulo: "Ámbito Nacional (1)",
            pagina: `
            <div class="banner">Constitución Política de México</div>

            <p><strong>Artículo 1:</strong> Obligación del Estado de proteger los derechos humanos.</p>

            <p><strong>Artículo 3:</strong> Educación basada en dignidad, derechos humanos e igualdad.</p>

            <p>Promueve cultura de paz, valores y desarrollo integral.</p>
            `
        },
        {
            titulo: "Ámbito Nacional (2)",
            pagina: `
            <div class="banner">Ley General de Educación</div>

            <p>Busca el desarrollo humano integral.</p>

            <p>Promueve la equidad, excelencia y mejora continua.</p>

            <p>Fomenta la cultura de paz y el respeto a los derechos humanos.</p>

            <p>Impulsa habilidades socioemocionales y convivencia.</p>
            `
        },
        {
            titulo: "Ámbito Nacional (3)",
            pagina: `
            <div class="banner">Derechos de Niñas, Niños y Adolescentes</div>

            <p>Derecho a educación de calidad.</p>

            <p>Protección contra violencia, abuso y maltrato.</p>

            <p>Promoción de convivencia escolar armónica.</p>

            <p>Creación de mecanismos de prevención y atención.</p>
            `
        },
        {
            titulo: "Ámbito Nacional (4)",
            pagina: `
            <div class="banner">Ley de Acceso a una Vida Libre de Violencia</div>

            <p>Define violencia laboral y docente.</p>

            <p>Incluye acoso y hostigamiento sexual.</p>

            <p>Promueve programas de detección temprana.</p>
            `
        },
        {
            titulo: "Ámbito Nacional (5)",
            pagina: `
            <div class="banner">Ley General de Víctimas</div>

            <p>Garantiza reparación integral del daño.</p>

            <p>Incluye atención médica, psicológica y social.</p>

            <p>Protección a víctimas de violencia.</p>
            `
        },
        {
            titulo: "Ámbito Nacional (6)",
            pagina: `
            <div class="banner">Plan Nacional de Desarrollo</div>

            <p>Promueve educación inclusiva y equitativa.</p>

            <p>Impulsa cultura de paz y bienestar.</p>

            <p>Fomenta igualdad sustantiva.</p>
            `
        },

        /* =========================
           ÁMBITO LOCAL
        ========================== */
        {
            titulo: "Ámbito Local (1)",
            pagina: `
            <div class="banner">Constitución de Tlaxcala</div>

            <p>Protección integral de niñas, niños y adolescentes.</p>

            <p>Garantiza derechos humanos y bienestar.</p>
            `
        },
        {
            titulo: "Ámbito Local (2)",
            pagina: `
            <div class="banner">Ley de Educación de Tlaxcala</div>

            <p>Fomenta valores, respeto y convivencia.</p>

            <p>Promueve cultura de paz y resolución de conflictos.</p>
            `
        },
        {
            titulo: "Ámbito Local (3)",
            pagina: `
            <div class="banner">Código Penal de Tlaxcala</div>

            <p>Sanciona el maltrato infantil.</p>

            <p>Protege la integridad física y emocional.</p>
            `
        },
        {
            titulo: "Ámbito Local (4)",
            pagina: `
            <div class="banner">Ley contra la Violencia Escolar</div>

            <p>Define tipos de violencia: física, verbal, psicológica y cibernética.</p>

            <p>Establece medidas de prevención y atención.</p>

            <p>Promueve ambientes escolares seguros.</p>
            `
        }
========================== */
    ]
}
];
