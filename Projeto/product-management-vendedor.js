// product-management-vendedor.js
// Script para Gestão de Produtos (Vendedor) - Consulta e acréscimo de estoque em múltiplos de 10

// Simulação de produtos (substitua por integração real com backend/MySQL)
const produtos = [
    {
        id: 1,
        nome: "Notebook Ultra",
        categoria: "Eletrônicos",
        preco: 2499.00,
        estoque: 30,
        descricao: "Notebook de alta performance para trabalho e estudo.",
        imagem: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop",
        ativo: true
    },
    {
        id: 2,
        nome: "Perfume Importado",
        categoria: "Beleza",
        preco: 349.90,
        estoque: 15,
        descricao: "Perfume masculino importado, fragrância marcante.",
        imagem: "https://blog.mensmarket.com.br/wp-content/uploads/2019/05/perfumes-masculinos-importados-chanel-600x600.jpg",
        ativo: true
    },
    {
        id: 3,
        nome: "Livro de Programação",
        categoria: "Livros",
        preco: 89.90,
        estoque: 50,
        descricao: "Aprenda programação do zero ao avançado.",
        imagem: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=200&h=200&fit=crop",
        ativo: false // Produto inativo
    },
    // Produtos reais solicitados
    { id: 'PROD-0001', nome: 'Smart TV Lenovo 55" 4K UHD', categoria: 'Eletrônicos', preco: 1204.84, estoque: 0, descricao: 'Smart TV 4K com painel UHD e recursos inteligentes.', imagem: 'https://www.lg.com/cac/images/tv-barra-de-sonido/md07579147/gallery/DZ-1.jpg', ativo: true },
    { id: 'PROD-0002', nome: 'Bicicleta Penalty Aro 29 21v', categoria: 'Esportes', preco: 1597.43, estoque: 28, descricao: 'Bicicleta esportiva com 21 marchas e quadro leve.', imagem: 'https://tse4.mm.bing.net/th/id/OIP.gMrHxVxNNAdpVBRS0bS_JwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3', ativo: true },
    { id: 'PROD-0003', nome: 'Fone Bluetooth JBL com Cancelamento de Ruído', categoria: 'Eletrônicos', preco: 493.25, estoque: 20, descricao: 'Fone JBL com cancelamento ativo de ruído e bateria longa.', imagem: 'https://tse1.mm.bing.net/th/id/OIP.FeQwy6XLjdYWzXhxomH7FgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3', ativo: true },
    { id: 'PROD-0004', nome: 'Skate Puma Maple 8.0"', categoria: 'Esportes', preco: 548.22, estoque: 30, descricao: 'Skate profissional com shape de maple canadense.', imagem: 'https://tse2.mm.bing.net/th/id/OIP.ax3nGMxCQFcOtcVlMgYi9QHaHa?rs=1&pid=ImgDetMain&o=7&rm=3', ativo: true },
    { id: 'PROD-0005', nome: 'Bicicleta Puma Aro 29 21v', categoria: 'Esportes', preco: 1677.09, estoque: 8, descricao: 'Bicicleta Puma com 21 velocidades e freio a disco.', imagem: 'https://tse3.mm.bing.net/th/id/OIP.LbC3B0XMoLhWLOkgrfXfLAHaFR?rs=1&pid=ImgDetMain&o=7&rm=3', ativo: true },
    { id: 'PROD-0006', nome: 'Liquidificador Philco 800W Inox', categoria: 'Eletrodomésticos', preco: 136.05, estoque: 25, descricao: 'Liquidificador potente com copo de inox e 800W.', imagem: 'https://tse1.mm.bing.net/th/id/OIP.zgOmHuNbZcIBe948j4PS0gHaHa?rs=1&pid=ImgDetMain&o=7&rm=3', ativo: true },
    { id: 'PROD-0007', nome: 'Aspirador Robô Mondial Wi-Fi', categoria: 'Eletrodomésticos', preco: 1208.14, estoque: 40, descricao: 'Aspirador robô inteligente com conexão Wi-Fi.', imagem: 'https://tse4.mm.bing.net/th/id/OIP.7oThSD4XQcatphxVqqk6rgHaFj?rs=1&pid=ImgDetMain&o=7&rm=3', ativo: true },
    { id: 'PROD-0014', nome: 'Aspirador Robô Britânia Wi-Fi', categoria: 'Eletrodomésticos', preco: 768.28, estoque: 26, descricao: 'Aspirador robô Britânia com controle remoto.', imagem: 'https://tse1.mm.bing.net/th/id/OIP.jvNHJOnQUudOMq-tu0M9nwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3', ativo: true },
    { id: 'PROD-0034', nome: 'Fone Bluetooth Dell com Cancelamento de Ruído', categoria: 'Eletrônicos', preco: 163.3, estoque: 13, descricao: 'Fone Dell com cancelamento de ruído e microfone.', imagem: 'https://m.media-amazon.com/images/I/61rdIOLz48L._AC_.jpg', ativo: true },
    { id: 'PROD-0170', nome: 'Par de Halteres 4kg Revestidos', categoria: 'Esportes', preco: 63.58, estoque: 19, descricao: 'Par de halteres revestidos, ideal para treinos em casa.', imagem: 'https://tse2.mm.bing.net/th/id/OIP.SX5e48V2NCJu5CN9HzMaHwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3', ativo: true },
    // Mais 10 produtos extras
    { id: 'PROD-0008', nome: 'Notebook Lenovo Ideapad 3', categoria: 'Eletrônicos', preco: 2999.99, estoque: 12, descricao: 'Notebook Lenovo com tela Full HD e SSD.', imagem: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80', ativo: true },
    { id: 'PROD-0009', nome: 'Smartphone Samsung Galaxy S21', categoria: 'Eletrônicos', preco: 3499.00, estoque: 15, descricao: 'Smartphone Samsung com câmera tripla e 128GB.', imagem: 'https://tse4.mm.bing.net/th/id/OIP.o_zNeHLMy8-aDTPXEptdmAHaFj?rs=1&pid=ImgDetMain&o=7&rm=3', ativo: true },
    { id: 'PROD-0010', nome: 'Tablet Apple iPad 9ª Geração', categoria: 'Eletrônicos', preco: 2499.90, estoque: 10, descricao: 'iPad Apple com tela Retina e chip A13.', imagem: 'https://th.bing.com/th/id/OIP.r11KzYpzFOk_Lm8p0n2kAQHaHa?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3', ativo: true },
    { id: 'PROD-0011', nome: 'Caixa de Som JBL Flip 5', categoria: 'Eletrônicos', preco: 399.99, estoque: 22, descricao: 'Caixa de som portátil JBL à prova d’água.', imagem: 'https://tse4.mm.bing.net/th/id/OIP.dxq-uvW98bGYabHOtZh74wHaHa?rs=1&pid=ImgDetMain&o=7&rm=3', ativo: true },
    { id: 'PROD-0012', nome: 'Relógio Smartwatch Xiaomi', categoria: 'Eletrônicos', preco: 299.90, estoque: 18, descricao: 'Smartwatch Xiaomi com monitoramento de saúde.', imagem: 'https://tse3.mm.bing.net/th/id/OIP.4Mrx5mDY-9CK7D-yJ1p8YQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3', ativo: true },
    { id: 'PROD-0013', nome: 'Cafeteira Nespresso Inissia', categoria: 'Eletrodomésticos', preco: 399.00, estoque: 7, descricao: 'Cafeteira Nespresso compacta e eficiente.', imagem: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80', ativo: true },
    { id: 'PROD-0015', nome: 'Mochila Executiva Swissland', categoria: 'Acessórios', preco: 189.90, estoque: 16, descricao: 'Mochila resistente, ideal para notebook.', imagem: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80', ativo: true },
    { id: 'PROD-0016', nome: 'Tênis Nike Revolution 5', categoria: 'Calçados', preco: 249.99, estoque: 20, descricao: 'Tênis Nike leve e confortável para corrida.', imagem: 'https://images.unsplash.com/photo-1518655048521-f130df041f66?auto=format&fit=crop&w=400&q=80', ativo: true },
    { id: 'PROD-0017', nome: 'Cadeira Gamer ThunderX3', categoria: 'Móveis', preco: 899.90, estoque: 5, descricao: 'Cadeira gamer ergonômica com apoio lombar.', imagem: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80', ativo: true },
    { id: 'PROD-0018', nome: 'Monitor LG 24” Full HD', categoria: 'Eletrônicos', preco: 799.00, estoque: 14, descricao: 'Monitor LG com painel IPS e 75Hz.', imagem: 'https://www.lg.com/content/dam/channel/wcms/br/images/monitores/24ms500-b_awzm_essp_br_c/gallery-new/MZ-01.jpg', ativo: true }
];

let paginaAtual = 1;
const itensPorPagina = 6;
let filtroNome = "";
let filtroCategoria = "";

function filtrarProdutos() {
    let filtrados = produtos.filter(p => p.nome.toLowerCase().includes(filtroNome.toLowerCase()));
    if (filtroCategoria) {
        filtrados = filtrados.filter(p => p.categoria === filtroCategoria);
    }
    return filtrados;
}

function renderCategorias() {
    const select = document.getElementById('categoryFilter');
    const categorias = [...new Set(produtos.map(p => p.categoria))];
    select.innerHTML = '<option value="">Todas as categorias</option>' +
        categorias.map(cat => `<option value="${cat}">${cat}</option>`).join('');
}

function renderProdutos() {
    const grid = document.getElementById('productsGrid');
    const produtosFiltrados = filtrarProdutos();
    const inicio = (paginaAtual - 1) * itensPorPagina;
    const fim = inicio + itensPorPagina;
    const pagina = produtosFiltrados.slice(inicio, fim);
    grid.innerHTML = pagina.map(produto => `
        <div class="product-card" style="min-height: 350px;">
            <div class="product-image">
                <img src="${produto.imagem}" alt="${produto.nome}">
            </div>
            <div class="product-info">
                <span class="product-name">${produto.nome}</span>
                <span class="product-category">${produto.categoria}</span>
                <span class="product-price">R$ ${produto.preco.toFixed(2)}</span>
                <span class="product-stock">Estoque: ${produto.estoque}</span>
                <button class="btn-primary btn-ver-detalhes" onclick="abrirModal('${produto.id}')" ${!produto.ativo ? 'disabled style="background:#ccc;cursor:not-allowed;"' : ''}>Ver Detalhes</button>
                ${!produto.ativo ? '<span style="color:#e74c3c;font-weight:bold;">Produto inativo</span>' : ''}
            </div>
        </div>
    `).join('');
    renderPaginacao(produtosFiltrados.length);
}

function renderPaginacao(total) {
    const prevBtn = document.getElementById('prevPage');
    const nextBtn = document.getElementById('nextPage');
    const page1Btn = document.getElementById('page1');
    const totalPages = Math.ceil(total / itensPorPagina);
    // Atualiza botão numérico
    page1Btn.textContent = paginaAtual;
    // Ativa/desativa botões
    prevBtn.disabled = paginaAtual === 1;
    nextBtn.disabled = paginaAtual === totalPages;
    // Eventos
    prevBtn.onclick = () => { if (paginaAtual > 1) { paginaAtual--; renderProdutos(); } };
    nextBtn.onclick = () => { if (paginaAtual < totalPages) { paginaAtual++; renderProdutos(); } };
    // Destaca botão ativo
    if (page1Btn) {
        page1Btn.classList.add('active');
    }
}

document.getElementById('searchInput').addEventListener('input', function(e) {
    filtroNome = e.target.value;
    paginaAtual = 1;
    renderProdutos();
});
document.getElementById('categoryFilter').addEventListener('change', function(e) {
    filtroCategoria = e.target.value;
    paginaAtual = 1;
    renderProdutos();
});


function abrirModal(id) {
    // Garante comparação por string para funcionar com ids numéricos e string
    const produto = produtos.find(p => String(p.id) === String(id));
    if (!produto) return;
    document.getElementById('modalProductName').textContent = produto.nome;
    document.getElementById('modalProductDesc').textContent = produto.descricao;
    document.getElementById('modalProductImage').src = produto.imagem;
    document.getElementById('modalProductCategory').textContent = produto.categoria;
    document.getElementById('modalProductPrice').textContent = `R$ ${produto.preco.toFixed(2)}`;
    document.getElementById('modalProductStock').textContent = produto.estoque;
    document.getElementById('modalProductStatus').textContent = produto.ativo ? 'Ativo' : 'Inativo';
    document.getElementById('modalProductStatus').style.background = produto.ativo ? '#eafbe7' : '#fbeaea';
    document.getElementById('modalProductStatus').style.color = produto.ativo ? '#1bc47d' : '#e74c3c';
    document.getElementById('stockIncrement').value = "10";
    document.getElementById('confirmAddStock').onclick = function() { abrirConfirmacao(produto.id); };
    document.getElementById('stockModal').style.display = 'block';
}

document.getElementById('closeModal').onclick = function() {
    document.getElementById('stockModal').style.display = 'none';
};

window.onclick = function(event) {
    if (event.target === document.getElementById('stockModal')) {
        document.getElementById('stockModal').style.display = 'none';
    }
};


function abrirConfirmacao(id) {
    const produto = produtos.find(p => p.id === id);
    if (!produto) return;
    if (!produto.ativo) {
        showToast('Produto inativo: não é possível ajustar estoque', 'error');
        return;
    }
    const valor = parseInt(document.getElementById('stockIncrement').value, 10);
    if (isNaN(valor) || valor % 10 !== 0) {
        showToast('Acréscimo deve ser em lotes de 10 (10, 20, 30...)', 'error');
        return;
    }
    if (produto.limiteMax && produto.estoque + valor > produto.limiteMax) {
        showToast(`Operação ultrapassa o limite de estoque (máx. ${produto.limiteMax}).`, 'error');
        return;
    }
    // Preenche modal de confirmação visual
    document.getElementById('confirmProductName').textContent = produto.nome;
    document.getElementById('confirmOperation').textContent = `Adicionar +${valor} unidades`;
    document.getElementById('confirmNewStock').textContent = `${produto.estoque + valor} unidades`;
    document.getElementById('stockModal').style.display = 'none';
    document.getElementById('confirmModal').style.display = 'block';
    // Botões
    document.getElementById('cancelConfirm').onclick = function() {
        document.getElementById('confirmModal').style.display = 'none';
        document.getElementById('stockModal').style.display = 'block';
    };
    document.getElementById('doConfirm').onclick = function() {
        document.getElementById('confirmModal').style.display = 'none';
        // Simulação de atualização (substitua por chamada AJAX/fetch real)
        setTimeout(() => {
            produto.estoque += valor;
            document.getElementById('modalProductStock').textContent = produto.estoque;
            renderProdutos();
            showToast('Estoque atualizado com sucesso', 'success');
        }, 500);
    };
}

function showToast(msg, type = 'info') {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `<span class="toast-icon">${type === 'success' ? '✔️' : type === 'error' ? '❌' : 'ℹ️'}</span><span class="toast-content">${msg}</span>`;
    container.appendChild(toast);
    setTimeout(() => { toast.remove(); }, 3500);
}

// Inicialização
renderCategorias();
renderProdutos();
