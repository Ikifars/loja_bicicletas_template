'use client'

import { useEffect, useMemo, useState, type ReactNode } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import {
  Backpack,
  Bike,
  ChevronDown,
  Cog,

  ChevronLeft,
  ChevronRight,
  Heart,
  Menu,
  Search,
  ShoppingBag,
  SlidersHorizontal,
  X,
} from 'lucide-react'


const products = [
  // --- BIKES ---
  { id: 1, name: 'BIC SCOTT SCALE RC TEAM ISSUE', category: 'Bikes', price: '35.990,00', old: '38.990,00', image: 'https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?auto=format&fit=crop&w=800&q=85', badge: '-7%' },
  { id: 2, name: 'BIC CANNONDALE SYNAPSE NEO', category: 'Bikes', price: '42.500,00', image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=800&q=85' },
  { id: 3, name: 'BIC PINARELLO F5 RIVAL AXS', category: 'Bikes', price: '54.900,00', image: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=800&q=85' },
  { id: 4, name: 'BIC SCOTT SPARK RC EXPERT', category: 'Bikes', price: '39.990,00', image: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?auto=format&fit=crop&w=800&q=85' },
  { id: 5, name: 'BIC SPECIALIZED TARMAC SL7 COMP', category: 'Bikes', price: '32.900,00', old: '35.000,00', image: 'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?auto=format&fit=crop&w=800&q=85', badge: '-6%' },
  { id: 6, name: 'BIC TREK X-CALIBER 9', category: 'Bikes', price: '12.490,00', image: 'https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?auto=format&fit=crop&w=800&q=85' },
  { id: 7, name: 'BIC OGGI BIG WHEEL 7.4', category: 'Bikes', price: '8.290,00', image: 'https://images.unsplash.com/photo-1511994298241-608e28f14fde?auto=format&fit=crop&w=800&q=85' },
  { id: 8, name: 'BIC CANYON AEROAD CF SL 8', category: 'Bikes', price: '38.000,00', image: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=800&q=85' },
  { id: 9, name: 'BIC CALOI ELITE CARBON FS', category: 'Bikes', price: '19.990,00', old: '22.500,00', image: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?auto=format&fit=crop&w=800&q=85', badge: '-11%' },
  { id: 10, name: 'BIC CERVELO S5 DISC ULTEGRA DI2', category: 'Bikes', price: '72.000,00', image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=800&q=85' },
  { id: 11, name: 'BIC S-WORKS EPIC WORLD CUP', category: 'Bikes', price: '89.900,00', image: 'https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?auto=format&fit=crop&w=800&q=85' },
  { id: 12, name: 'BIC BMC TIMEMACHINE ROAD 01', category: 'Bikes', price: '68.500,00', image: 'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?auto=format&fit=crop&w=800&q=85' },
  { id: 13, name: 'BIC SENSE FACTORY CARBON EVO', category: 'Bikes', price: '24.990,00', image: 'https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?auto=format&fit=crop&w=800&q=85' },
  { id: 14, name: 'BIC MERIDA SCULTURA 4000', category: 'Bikes', price: '16.800,00', old: '18.200,00', image: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=800&q=85', badge: '-7%' },
  { id: 15, name: 'BIC BIANCHI OLTRE XR4 DURA-ACE', category: 'Bikes', price: '65.000,00', image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=800&q=85' },
  { id: 16, name: 'BIC GIANT ADVANCED PRO 29 1', category: 'Bikes', price: '28.500,00', image: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?auto=format&fit=crop&w=800&q=85' },
  { id: 17, name: 'BIC FACTOR OSTRO VAM SHIMANO DI2', category: 'Bikes', price: '78.000,00', image: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=800&q=85' },

  // --- ACESSÓRIOS ---
  { id: 18, name: 'RASTREADOR MAGICSHINE NEFTY', category: 'Acessórios', price: '180,00', image: 'https://images.unsplash.com/photo-1511994298241-608e28f14fde?auto=format&fit=crop&w=800&q=85' },
  { id: 19, name: 'CAPACETE SPECIALIZED EVADE 3', category: 'Acessórios', price: '1.990,00', old: '2.200,00', image: 'https://images.unsplash.com/photo-1558980394-0c87b4e6b3c5?auto=format&fit=crop&w=800&q=85', badge: '-9%' },
  { id: 20, name: 'CICLOCOMPUTADOR GARMIN EDGE 840', category: 'Acessórios', price: '3.890,00', image: 'https://images.unsplash.com/photo-1517649763962-0c623266010b?auto=format&fit=crop&w=800&q=85' },
  { id: 21, name: 'FAROL LEZYNE MACRO DRIVE 1300XXL', category: 'Acessórios', price: '650,00', image: 'https://images.unsplash.com/photo-1508974239320-0a029497e820?auto=format&fit=crop&w=800&q=85' },
  { id: 22, name: 'BOMBA DE AR LEZYNE CNC FLOOR DRIVE', category: 'Acessórios', price: '520,00', image: 'https://images.unsplash.com/photo-1511994298241-608e28f14fde?auto=format&fit=crop&w=800&q=85' },
  { id: 23, name: 'SAPATILHA SHIMANO RC702 ROAD', category: 'Acessórios', price: '1.490,00', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=85' },
  { id: 24, name: 'OCULOS OAKLEY SUTRO LITE', category: 'Acessórios', price: '1.150,00', old: '1.300,00', image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=800&q=85', badge: '-11%' },
  { id: 25, name: 'BOLSA DE SELIM TOPEAK AEROPACK', category: 'Acessórios', price: '210,00', image: 'https://images.unsplash.com/photo-1558980394-0c87b4e6b3c5?auto=format&fit=crop&w=800&q=85' },
  { id: 26, name: 'CAPACETE GIRO AIR ATTACK MIPS', category: 'Acessórios', price: '1.250,00', image: 'https://images.unsplash.com/photo-1558980394-0c87b4e6b3c5?auto=format&fit=crop&w=800&q=85' },
  { id: 27, name: 'LUVAS FOX DEFEND D3O', category: 'Acessórios', price: '280,00', image: 'https://images.unsplash.com/photo-1517649763962-0c623266010b?auto=format&fit=crop&w=800&q=85' },
  { id: 28, name: 'SUPORTE CARAMANHOLA TACOX CARBON', category: 'Acessórios', price: '190,00', image: 'https://images.unsplash.com/photo-1508974239320-0a029497e820?auto=format&fit=crop&w=800&q=85' },
  { id: 29, name: 'CARAMANHOLA CAMELBAK CHUTE MAG', category: 'Acessórios', price: '110,00', image: 'https://images.unsplash.com/photo-1511994298241-608e28f14fde?auto=format&fit=crop&w=800&q=85' },
  { id: 30, name: 'ROLO DE TREINAMENTO WAHOO KICKR CORE', category: 'Acessórios', price: '7.890,00', image: 'https://images.unsplash.com/photo-1517649763962-0c623266010b?auto=format&fit=crop&w=800&q=85' },
  { id: 31, name: 'PEDAL SHIMANO ULTEGRA PD-R8000', category: 'Acessórios', price: '1.290,00', image: 'https://images.unsplash.com/photo-1502744688674-c619d1586c9e?auto=format&fit=crop&w=800&q=85' },
  { id: 32, name: 'MOCHILA DE HIDRATAÇÃO CAMELBAK ROGUE', category: 'Acessórios', price: '450,00', old: '520,00', image: 'https://images.unsplash.com/photo-1558980394-0c87b4e6b3c5?auto=format&fit=crop&w=800&q=85', badge: '-13%' },
  { id: 33, name: 'RADAR E LUZ TRASEIRA GARMIN VARIA RTL515', category: 'Acessórios', price: '1.850,00', image: 'https://images.unsplash.com/photo-1508974239320-0a029497e820?auto=format&fit=crop&w=800&q=85' },

  // --- PEÇAS ---
  { id: 34, name: 'CUBO TRASEIRO SHIMANO MT510', category: 'Peças', price: '320,00', image: 'https://images.unsplash.com/photo-1502744688674-c619d1586c9e?auto=format&fit=crop&w=800&q=85' },
  { id: 35, name: 'ÓLEO SUSPENSÃO ROCK SHOX 2.5W 1L', category: 'Peças', price: '190,00', image: 'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?auto=format&fit=crop&w=800&q=85' },
  { id: 36, name: 'GRUPO SRAM GX EAGLE AXS WIRELESS', category: 'Peças', price: '6.490,00', image: 'https://images.unsplash.com/photo-1502744688674-c619d1586c9e?auto=format&fit=crop&w=800&q=85' },
  { id: 37, name: 'CASSETE SHIMANO DEORE XT M8100 12V', category: 'Peças', price: '1.100,00', image: 'https://images.unsplash.com/photo-1502744688674-c619d1586c9e?auto=format&fit=crop&w=800&q=85' },
  { id: 38, name: 'CORRENTE SRAM XX1 EAGLE RAINBOW 12V', category: 'Peças', price: '680,00', image: 'https://images.unsplash.com/photo-1502744688674-c619d1586c9e?auto=format&fit=crop&w=800&q=85' },
  { id: 39, name: 'SUSPENSÃO ROCKSHOX SID SL ULTIMATE', category: 'Peças', price: '6.990,00', old: '7.500,00', image: 'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?auto=format&fit=crop&w=800&q=85', badge: '-7%' },
  { id: 40, name: 'PNEU MAXXIS ASPEN 29x2.40 WT TR EXO', category: 'Peças', price: '420,00', image: 'https://images.unsplash.com/photo-1502744688674-c619d1586c9e?auto=format&fit=crop&w=800&q=85' },
  { id: 41, name: 'PNEU CONTINENTAL GRAND PRIX 5000 700x28', category: 'Peças', price: '490,00', image: 'https://images.unsplash.com/photo-1502744688674-c619d1586c9e?auto=format&fit=crop&w=800&q=85' },
  { id: 42, name: 'FREIO A DISCO HIDRÁULICO SHIMANO DEORE M6100', category: 'Peças', price: '850,00', image: 'https://images.unsplash.com/photo-1502744688674-c619d1586c9e?auto=format&fit=crop&w=800&q=85' },
  { id: 43, name: 'RODAS CARBONO DT SWISS XMC 1200', category: 'Peças', price: '14.500,00', image: 'https://images.unsplash.com/photo-1502744688674-c619d1586c9e?auto=format&fit=crop&w=800&q=85' },
  { id: 44, name: 'SELIM POWER COMP SHORT NOSE SPECIALIZED', category: 'Peças', price: '620,00', image: 'https://images.unsplash.com/photo-1502744688674-c619d1586c9e?auto=format&fit=crop&w=800&q=85' },
  { id: 45, name: 'DISCO DE FREIO SHIMANO RT-MT900 ICE-TECH 160MM', category: 'Peças', price: '540,00', image: 'https://images.unsplash.com/photo-1502744688674-c619d1586c9e?auto=format&fit=crop&w=800&q=85' },
  { id: 46, name: 'MOVIMENTO CENTRAL CERAMICSPEED BSA SRAM DUB', category: 'Peças', price: '2.100,00', image: 'https://images.unsplash.com/photo-1502744688674-c619d1586c9e?auto=format&fit=crop&w=800&q=85' },
  { id: 47, name: 'GUIDÃO INTEGRADO CARBONO SYNCROS FRASER iC', category: 'Peças', price: '3.200,00', image: 'https://images.unsplash.com/photo-1502744688674-c619d1586c9e?auto=format&fit=crop&w=800&q=85' },
  { id: 48, name: 'CANOTE RETRÁTIL FOX TRANSFER FACTORY KASHIMA', category: 'Peças', price: '3.450,00', image: 'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?auto=format&fit=crop&w=800&q=85' },
  { id: 49, name: 'CÂMBIO TRASEIRO SHIMANO XTR M9100 12V', category: 'Peças', price: '1.950,00', image: 'https://images.unsplash.com/photo-1502744688674-c619d1586c9e?auto=format&fit=crop&w=800&q=85' },
  { id: 50, name: 'PEDIVELA SRAM RED AXS POWER METER 12V', category: 'Peças', price: '7.800,00', image: 'https://images.unsplash.com/photo-1502744688674-c619d1586c9e?auto=format&fit=crop&w=800&q=85' }
]

const priceInReais = (price: string) => Number(price.replace('.', '').replace(',', '.')) * 5.05
const formatReais = (price: string) => priceInReais(price).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

const menus = {
  Bikes: ['E-Bike', 'Gravel', 'Infantil', 'Mountain Bike', 'Speed', 'Triatlon'],
  Peças: ['Câmbio Dianteiro', 'Câmbio Traseiro', 'Câmara De Ar', 'Canote Selim', 'Cassete', 'Coroa', 'Corrente', 'Cubo', 'Eixo Central', 'Freios', 'Grupo', 'Guidão', 'Kit Reparos Suspensão', 'Lubrificantes/Graxa', 'Mesa', 'Pastilha De Freio', 'Pedal', 'Pedivela', 'Pneu', 'Quadro', 'RapFire / Trigger / Sti', 'Rodas', 'Rodlaina/Cage', 'Rotores', 'Selim', 'Suspensão'],
  Acessórios: ['Bolsa Selim', 'Bombas De Ar', 'Cadeados', 'Capa STI', 'Capacete', 'Caramanhola', 'Farol/Lanterna', 'Ferramentas', 'Fita De Guidão', 'GPS', 'Luvas', 'Manopla', 'Mochila Hidratação', 'Óculos', 'Rolo De Treino', 'Sapatilhas', 'Suporte Caramanhola', 'TransBike', 'Vestuário'],
}

function Header({ cartCount, onCart, search, onSearch }: { cartCount: number; onCart: () => void; search: string; onSearch: (value: string) => void }) {
  const [open, setOpen] = useState<string | null>(null)
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return <>
    <header className="site-header">
      <div className="topbar"><span>ATENDIMENTO: +55 (11) 98407-9235</span><span>ENVIO PARA TODO O BRASIL</span></div>
      <div className="header-main">
        <a className="brand" href="#inicio" aria-label="JoãoCiclo"><img src="/joaociclo-logo.png" alt="JoãoCiclo" /></a>
        <nav className="desktop-nav"><a href="#inicio">INÍCIO</a><a href="#catalogo">CATÁLOGO</a><a href="#sobre">SOBRE NÓS</a></nav>
        <div className="header-actions"><label className={mobileSearchOpen ? 'search mobile-search-open' : 'search'}><Search size={18} /><input value={search} onChange={(event) => onSearch(event.target.value)} placeholder="O que você procura?" aria-label="Buscar produtos" /></label><button type="button" className="mobile-search-button" onClick={() => setMobileSearchOpen((value) => !value)} aria-label="Pesquisar produtos" aria-expanded={mobileSearchOpen}><Search size={20} /></button><button aria-label="Favoritos"><Heart size={20} /></button><button className="cart-button" onClick={onCart} aria-label="Abrir carrinho"><ShoppingBag size={20} /><span>{cartCount}</span></button><button className="mobile-menu" onClick={() => setMobileMenuOpen((value) => !value)} aria-label="Menu" aria-expanded={mobileMenuOpen}><Menu size={22} /></button></div>
      </div>
      <div className="category-bar">
        <div className="category-inner">{Object.keys(menus).map((name) => { const CategoryIcon = name === 'Bikes' ? Bike : name === 'Peças' ? Cog : Backpack; return <button key={name} className={open === name ? 'active' : ''} onClick={() => setOpen(open === name ? null : name)}><CategoryIcon size={17} strokeWidth={1.7} />{name}<ChevronDown size={14} /></button> })}</div>
      </div>
      {open && <><button className="mega-overlay" aria-label="Fechar menu" onClick={() => setOpen(null)} /><div className="mega-menu"><div className="mega-inner"><div className="mega-title">{open === 'Bikes' ? <Bike size={22} /> : open === 'Peças' ? <Cog size={22} /> : <Backpack size={22} />}<strong>{open.toUpperCase()}</strong></div><div className="mega-links">{menus[open as keyof typeof menus].map((item) => <a href="#catalogo" key={item} onClick={() => setOpen(null)}>{item}</a>)}</div></div></div></>}
      {mobileMenuOpen && <div className="mobile-nav-panel"><a href="#inicio" onClick={() => setMobileMenuOpen(false)}>Início</a><a href="#catalogo" onClick={() => setMobileMenuOpen(false)}>Catálogo</a>{Object.keys(menus).map((name) => <button key={name} onClick={() => { setOpen(open === name ? null : name); setMobileMenuOpen(false) }}>{name}<ChevronDown size={15} /></button>)}<a href="#sobre" onClick={() => setMobileMenuOpen(false)}>Sobre nós</a></div>}
    </header>
  </>
}

function ProductCard({ product, onAdd, onOpen }: { product: typeof products[number]; onAdd: () => void; onOpen: () => void }) {
  return <article className="product-card"><button className="heart" aria-label="Adicionar aos favoritos"><Heart size={18} /></button>{product.badge && <span className="sale-badge">{product.badge}</span>}<button className="product-image" onClick={onOpen}><img src={product.image} alt={product.name} /></button><div className="product-info"><small>Referência: {10000 + product.id * 123}</small><h3>{product.name}</h3>{product.old && <div className="old-price">{formatReais(product.old)}</div>}<div className="price">{formatReais(product.price)}</div><button className="add-button" onClick={onAdd}>+ {product.category.toUpperCase()}</button></div></article>
}

function Footer() { return <footer id="sobre"><div className="footer-grid"><div><div className="brand footer-brand"><img src="/joaociclo-logo.png" alt="JoãoCiclo" /></div><p>Rua das Palmeiras, 120<br />São Paulo - SP, Brasil</p><button className="footer-cta">FALE CONOSCO</button></div><div><h4>INSTITUCIONAL</h4><a>Home</a><a>A Empresa</a><a>Marcas</a><a>Onde Estamos</a><a>Trabalhe Conosco</a></div><div><h4>CENTRAL DE ATENDIMENTO</h4><p>+55 (11) 98407-9235<br />CONTATO@JOAOCICLO.COM.BR</p><h4>HORÁRIO</h4><p>SEG A SEX 08:30 AS 16:00</p><div className="social-links" aria-label="Redes sociais"><a href="https://www.instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"><FontAwesomeIcon icon={faInstagram} /></a><a href="https://www.facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook"><FontAwesomeIcon icon={faFacebook} /></a></div></div></div><div className="copyright">JOÃOCICLO 2024 · São Paulo - SP, Brasil · Todos os direitos reservados</div></footer> }

function FilterGroup({ title, options, selected, onSelect, children }: { title: string; options: string[]; selected: string; onSelect: (value: string) => void; children?: ReactNode }) {
  const [expanded, setExpanded] = useState(true)
  return <div className="filter-group"><button className="filter-row" onClick={() => setExpanded((value) => !value)} aria-expanded={expanded}><span>{title}</span><ChevronDown size={16} className={expanded ? 'filter-chevron expanded' : 'filter-chevron'} /></button>{expanded && <div className="filter-options">{children}{options.map((option) => <label key={option} className="filter-option"><input type="radio" name={title} checked={selected === option} onChange={() => onSelect(option)} /><span>{option}</span></label>)}</div>}</div>
}

function ProductDetail({ product, onBack, onAdd, onOpenProduct }: { product: typeof products[number]; onBack: () => void; onAdd: () => void; onOpenProduct: (product: typeof products[number]) => void }) {
  const similar = products.filter((item) => item.id !== product.id).slice(0, 4)
  return <main className="product-page"><div className="product-page-top"><button className="back-link" onClick={onBack}>← Voltar ao catálogo</button><div className="product-detail"><div className="product-gallery"><img src={product.image} alt={product.name} /><div className="thumbnail"><img src={product.image} alt="Miniatura do produto" /></div></div><div className="product-copy"><h1>{product.name}</h1><div className="detail-meta"><span>Código: {10000 + product.id * 123}</span><span>Marcas: JoãoCiclo</span><span>Estoque: <b>Disponível</b></span></div><div className="stars" aria-label="5 estrelas">★★★★★</div><div className="detail-buy"><div><strong>{formatReais(product.price)}</strong></div><div className="quantity">− <b>01</b> +</div><button className="buy-button" onClick={onAdd}><ShoppingBag size={20} /></button></div><hr /><p className="learn-more">Ler Mais</p></div></div></div><section className="similar"><div className="section-heading"><h2>Produtos similares</h2><div className="carousel-arrows"><button aria-label="Anterior"><ChevronLeft /></button><button aria-label="Próximo"><ChevronRight /></button></div></div><div className="similar-grid">{similar.map((item) => <ProductCard key={item.id} product={item} onAdd={onAdd} onOpen={() => onOpenProduct(item)} />)}</div></section></main>
}

const heroSlides = [
  { image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1200&q=90', alt: 'Bicicleta esportiva em uma paisagem' },
  { image: 'https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?auto=format&fit=crop&w=1200&q=90', alt: 'Mountain bike em trilha' },
  { image: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=1200&q=90', alt: 'Bicicleta de estrada' },
]

export default function Storefront() {
  const [filter, setFilter] = useState('Todos')
  const [brand, setBrand] = useState('Todas')
  const [size, setSize] = useState('Todos')
  const [maxPrice, setMaxPrice] = useState(70000)
  const [search, setSearch] = useState('')
  const [heroSlide, setHeroSlide] = useState(0)
  const [promoStart, setPromoStart] = useState(0)
  const [collectionImagesVisible, setCollectionImagesVisible] = useState(false)
  useEffect(() => {
    const timer = window.setInterval(() => setHeroSlide((slide) => (slide + 1) % heroSlides.length), 5000)
    return () => window.clearInterval(timer)
  }, [])
  useEffect(() => {
    const timer = window.setInterval(() => setPromoStart((start) => (start + 1) % products.length), 3000)
    return () => window.clearInterval(timer)
  }, [])
  useEffect(() => {
    const timer = window.setInterval(() => setCollectionImagesVisible((visible) => !visible), 5000)
    return () => window.clearInterval(timer)
  }, [])
  const changeHeroSlide = (direction: number) => setHeroSlide((slide) => (slide + direction + heroSlides.length) % heroSlides.length)
  const [cart, setCart] = useState<typeof products>([])
  const [selected, setSelected] = useState<typeof products[number] | null>(null)
  const [cartOpen, setCartOpen] = useState(false)
  useEffect(() => {
    const syncWithHistory = () => {
      const url = new URL(window.location.href)
      const productId = Number(url.searchParams.get('produto'))
      setSelected(products.find((product) => product.id === productId) ?? null)
      setCartOpen(url.searchParams.get('carrinho') === '1')
    }

    syncWithHistory()
    window.addEventListener('popstate', syncWithHistory)
    return () => window.removeEventListener('popstate', syncWithHistory)
  }, [])
  const visible = useMemo(() => products.filter((p) => (filter === 'Todos' || p.category === filter) && (brand === 'Todas' || brand === 'JoãoCiclo') && (size === 'Todos' || size === 'Médio') && priceInReais(p.price) <= maxPrice && p.name.toLowerCase().includes(search.toLowerCase())), [filter, brand, size, maxPrice, search])
  const add = (product: typeof products[number]) => setCart((items) => items.some((item) => item.id === product.id) ? items : [...items, product])
  const openProduct = (product: typeof products[number]) => {
    if (selected?.id === product.id) return
    const url = new URL(window.location.href)
    url.searchParams.set('produto', String(product.id))
    url.searchParams.delete('carrinho')
    window.history.pushState({ ...window.history.state, joaoCicloView: 'product' }, '', url)
    setSelected(product)
    setCartOpen(false)
    window.scrollTo(0, 0)
  }
  const closeProduct = () => {
    if (window.history.state?.joaoCicloView === 'product') {
      window.history.back()
      return
    }
    const url = new URL(window.location.href)
    url.searchParams.delete('produto')
    window.history.replaceState(window.history.state, '', url)
    setSelected(null)
  }
  const openCart = () => {
    if (cartOpen) return
    const url = new URL(window.location.href)
    url.searchParams.set('carrinho', '1')
    window.history.pushState({ ...window.history.state, joaoCicloView: 'cart' }, '', url)
    setCartOpen(true)
  }
  const closeCart = () => {
    if (window.history.state?.joaoCicloView === 'cart') {
      window.history.back()
      return
    }
    const url = new URL(window.location.href)
    url.searchParams.delete('carrinho')
    window.history.replaceState(window.history.state, '', url)
    setCartOpen(false)
  }
  return <div className="storefront"><Header cartCount={cart.length} onCart={openCart} search={search} onSearch={setSearch} />{selected ? <ProductDetail product={selected} onBack={closeProduct} onAdd={() => { add(selected); openCart() }} onOpenProduct={openProduct} /> : <main id="inicio">
    <section className="hero" aria-roledescription="carousel" aria-label="Destaques JoãoCiclo"><div className="hero-copy"><span>NOVA COLEÇÃO 2027</span><h1>Pedale além<br /><em>dos limites.</em></h1><p>Performance, tecnologia e liberdade para transformar cada caminho.</p><a href="#catalogo" className="hero-button">EXPLORAR BIKES <ChevronRight size={17} /></a></div><div className="hero-bike"><img key={heroSlide} src={heroSlides[heroSlide].image} alt={heroSlides[heroSlide].alt} /></div><button className="hero-arrow hero-prev" onClick={() => changeHeroSlide(-1)} aria-label="Slide anterior"><ChevronLeft /></button><button className="hero-arrow hero-next" onClick={() => changeHeroSlide(1)} aria-label="Próximo slide"><ChevronRight /></button><div className="hero-dots">{heroSlides.map((slide, index) => <button key={slide.image} className={index === heroSlide ? 'selected' : ''} onClick={() => setHeroSlide(index)} aria-label={`Ir para slide ${index + 1}`} />)}</div></section>
    <section className="promo" id="catalogo"><div className="section-heading"><button className="promo-arrow promo-prev" aria-label="Anterior" onClick={() => setPromoStart((start) => (start - 1 + products.length) % products.length)}><ChevronLeft /></button><div><span className="eyebrow">SELEÇÃO JOÃOCICLO</span><h2>Promoção</h2></div><button className="promo-arrow promo-next" aria-label="Próximo" onClick={() => setPromoStart((start) => (start + 1) % products.length)}><ChevronRight /></button></div><div className="promo-grid">{Array.from({ length: 4 }, (_, index) => products[(promoStart + index) % products.length]).map((p) => <ProductCard product={p} key={p.id} onAdd={() => add(p)} onOpen={() => openProduct(p)} />)}</div></section>
    <section className="catalog"><div className="section-heading"><div><span className="eyebrow">ENCONTRE SEU EQUIPAMENTO</span><h2>Produtos em destaque</h2></div><div className="filter-tabs">{['Todos', 'Bikes', 'Peças', 'Acessórios'].map((item) => <button key={item} className={filter === item ? 'active' : ''} onClick={() => setFilter(item)}>{item}</button>)}</div></div><div className="catalog-layout"><aside><div className="aside-heading"><SlidersHorizontal size={18} /> FILTROS</div><FilterGroup title="Categorias" options={['Todos', 'Bikes', 'Peças', 'Acessórios']} selected={filter} onSelect={setFilter} /><FilterGroup title="Marcas" options={['Todas', 'JoãoCiclo', 'Shimano', 'Specialized', 'Scott']} selected={brand} onSelect={setBrand} /><FilterGroup title="Faixa de preço" options={[]} selected="" onSelect={() => {}}><input className="price-range" type="range" min="200" max="70000" step="50" value={maxPrice} onChange={(event) => setMaxPrice(Number(event.target.value))} aria-label="Preço máximo" /><div className="price-range-values"><span>R$ 200</span><strong>Até {maxPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</strong></div></FilterGroup><FilterGroup title="Tamanho" options={['Todos', 'Pequeno', 'Médio', 'Grande']} selected={size} onSelect={setSize} /></aside><div className="catalog-grid">{visible.map((p) => <ProductCard product={p} key={p.id} onAdd={() => add(p)} onOpen={() => openProduct(p)} />)}</div></div></section>
    <section className="collections"><div className={`collection collection-green${collectionImagesVisible ? ' image-visible' : ''}`}><img className="collection-panel collection-image" src="/linha-pecas.png" alt="" aria-hidden="true" /><div className="collection-panel collection-copy"><span>LINHA PEÇAS</span><strong>Precisão em<br />cada detalhe.</strong><a href="#catalogo">VER PRODUTOS <ChevronRight size={14} /></a></div></div><div className={`collection collection-yellow${collectionImagesVisible ? ' image-visible' : ''}`}><img className="collection-panel collection-image" src="/linha-acessorios.png?v=2" alt="" aria-hidden="true" /><div className="collection-panel collection-copy"><span>LINHA ACESSÓRIOS</span><strong>Seu estilo.<br />Seu ritmo.</strong><a href="#catalogo">VER PRODUTOS <ChevronRight size={14} /></a></div></div></section>
  </main>}
  <div className="chain-divider" aria-hidden="true" />
  <Footer />
  {cartOpen && <div className="cart-drawer-backdrop" onClick={closeCart}><aside className="cart-drawer" onClick={(e) => e.stopPropagation()}><div className="drawer-header"><h2>Seu carrinho</h2><button onClick={closeCart} aria-label="Fechar carrinho"><X /></button></div>{cart.length === 0 ? <div className="empty-cart"><ShoppingBag size={44} /><p>Seu carrinho está vazio.</p><button onClick={closeCart}>CONTINUAR COMPRANDO</button></div> : <>{cart.map((p) => <div className="cart-item" key={p.id}><img src={p.image} alt="" /><div><strong>{p.name}</strong><span>{formatReais(p.price)}</span></div></div>)}<button className="quote-button">FAZER ORÇAMENTO VIA WHATSAPP</button></>}</aside></div>}
  <a className="whatsapp" href="https://wa.me/5511984079235" target="_blank" rel="noreferrer" aria-label="Falar pelo WhatsApp"><FontAwesomeIcon icon={faWhatsapp} /></a></div>
}
