
import type { NewsArticle, ContactDetails, BrandingData, InstagramPost } from '../types.ts';

// =================================================================
// LINK PÚBLICO DO APLICATIVO
// Este é o link permanente que será usado no QR Code e no botão
// de compartilhar. Foi configurado com o URL do GitHub Pages.
// =================================================================
export const appShareUrl = 'https://gabinetecleitoncardoso.github.io/Gabinete-Digital123/';


// =================================================================
// DADOS DAS NOTÍCIAS
// Para adicionar uma nova notícia, copie um dos blocos abaixo e
// altere os valores.
// =================================================================
export const newsData: NewsArticle[] = [
  {
    id: 1,
    title: "Cleiton Cardoso solicita abertura de retorno na NS-15 para facilitar acesso à UFT",
    summary: "O deputado estadual Cleiton Cardoso (Republicanos) apresentou requerimento, em regime de urgência, solicitando à Agência de Transportes, Obras e Infraestrutura (Ageto) a construção de um retorno na Avenida NS-15, nas proximidades da entrada da Universidade Federal do Tocantins (UFT), em Palmas.",
    imageUrl: "https://i.imgur.com/thxQFLg.jpg",
    link: "https://www.al.to.leg.br/noticia/gabinete/cleiton-cardoso/16325/cleiton-cardoso-solicita-abertura-de-retorno-na-ns-15-para-facilitar-acesso-a-uft",
  },
  {
    id: 2,
    title: "Cleiton Cardoso anunciou apoio para a construção do Centro de Treinamento do 5ºBPM de Porto Nacional",
    summary: "O deputado estadual Cleiton Cardoso (Republicanos) recebeu, nesta terça-feira (4), no plenário da Assembleia Legislativa do Tocantins, a Tenente-Coronel Marlene Machado, comandante do 5º Batalhão da Polícia Militar (5º BPM) de Porto Nacional. O encontro também contou com a presença de outros parlamentares.",
    imageUrl: "https://i.imgur.com/vGlrWYF.jpg",
    link: "https://www.al.to.leg.br/noticia/gabinete/cleiton-cardoso/16298/cleiton-cardoso-anunciou-apoio-para-a-construcao-do-centro-de-treinamento-do-5-bpm-de-porto-nacional",
  },
  {
    id: 3,
    title: "Deputado Cleiton Cardoso entrega ambulância adquirida para o município de Pau D’Arco",
    summary: "O deputado estadual Cleiton Cardoso (Republicanos) realizou, nesta quinta-feira, 23, a entrega de uma nova ambulância ao município de Pau D’Arco, adquirida por meio de emenda parlamentar de sua autoria.",
    imageUrl: "https://i.imgur.com/pDsKczZ.jpg",
    link: "https://www.al.to.leg.br/noticia/gabinete/cleiton-cardoso/16259/deputado-cleiton-cardoso-entrega-ambulancia-adquirida-para-o-municipio-de-pau-d-arco",
  },
];

// =================================================================
// DADOS DO MURAL DO INSTA
// Para adicionar um novo recado, copie um dos blocos e altere os valores.
// Adicione o link do post específico do Instagram no campo `link`.
// =================================================================
export const instagramPostsData: InstagramPost[] = [
  {
    id: 1,
    text: "A fé move o nosso trabalho.🙏🏽\nO pé no chão mantém a simplicidade.\nE o coração segue firme no propósito de servir o povo tocantinense. 💪🏽✨",
    date: "18 de Julho, 2024",
    isNew: true, // Isso fará o selo "NOVO!" aparecer
    link: "https://www.instagram.com/reel/DQ_ozdGEW6v/?igsh=MXRqd2Zsem5ndjh6Yw==",
  },
  {
    id: 2,
    text: "🎉 Que alegria reencontrar os amigos e participar dessa festa linda que marcou os 72 anos de Lizarda! 💚\nUm aniversário cheio de emoção, tradição e o brilho do nosso povo! 🤠✨",
    date: "17 de Julho, 2024",
    isNew: false,
    link: "https://www.instagram.com/reel/DQ2Gw8eERQd/?igsh=MTZyZW0xZ283Zmc1eA==",
  },
  {
    id: 3,
    text: "🏃‍♂️ Teve corrida de rua hoje em Lizarda!\nInfelizmente não consegui estar presente, cheguei só no final do dia.\nMas fiquei muito feliz com o carinho do prefeito Marcelo, que fez questão de me presentear com uma das medalhas entregues aos participantes.",
    date: "16 de Julho, 2024",
    isNew: false,
    link: "https://www.instagram.com/p/DQ0PxPPjDQb/?igsh=aDFvenJkbWhovemZ4",
  },
];


// =================================================================
// DADOS DE CONTATO DO GABINETE
// Altere aqui os telefones, e-mails e redes sociais.
// =================================================================
export const contactData: ContactDetails = {
  phones: ["63 99208-4547", "63 99214-6055"],
  email: "cleitoncardoso2012@hotmail.com",
  address: "Palácio Deputado João D'Abreu - Praça dos Girassóis, S/Nº\nPlano Diretor Norte, Palmas - TO\nCEP: 77001-902",
  socialLinks: {
    instagram: "https://www.instagram.com/depcleitoncardoso?igsh=eGJhd3k3MXoxNG02",
    facebook: "https://www.facebook.com/share/1AKBMWJPXP/?mibextid=wwXIfr",
    whatsapp: `https://wa.me/5563992084547`,
  },
};

// =================================================================
// DADOS DE IMAGEM (BRANDING)
// Altere aqui os links para a foto do deputado e a logomarca.
// =================================================================
export const brandingData: BrandingData = {
  deputyPhotoUrl: "https://i.imgur.com/Iar7slJ.jpeg",
  logoUrl: "https://i.imgur.com/rboK7rb.png",
  mascotUrl: "https://i.imgur.com/uZsZzkj.png",
};