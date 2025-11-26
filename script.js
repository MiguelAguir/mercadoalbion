const resources = [
    // Recursos en bruto: Piedra
    "T4_ROCK", "T4_ROCK_LEVEL1@1", "T4_ROCK_LEVEL2@2", "T4_ROCK_LEVEL3@3", "T4_ROCK_LEVEL4@4",
    "T5_ROCK", "T5_ROCK_LEVEL1@1", "T5_ROCK_LEVEL2@2", "T5_ROCK_LEVEL3@3", "T5_ROCK_LEVEL4@4",
    "T6_ROCK", "T6_ROCK_LEVEL1@1", "T6_ROCK_LEVEL2@2", "T6_ROCK_LEVEL3@3", "T6_ROCK_LEVEL4@4",
    "T7_ROCK", "T7_ROCK_LEVEL1@1", "T7_ROCK_LEVEL2@2", "T7_ROCK_LEVEL3@3", "T7_ROCK_LEVEL4@4",
    "T8_ROCK", "T8_ROCK_LEVEL1@1", "T8_ROCK_LEVEL2@2", "T8_ROCK_LEVEL3@3", "T8_ROCK_LEVEL4@4",
    // Recursos en bruto: Cuero
    "T4_HIDE", "T4_HIDE_LEVEL1@1", "T4_HIDE_LEVEL2@2", "T4_HIDE_LEVEL3@3", "T4_HIDE_LEVEL4@4",
    "T5_HIDE", "T5_HIDE_LEVEL1@1", "T5_HIDE_LEVEL2@2", "T5_HIDE_LEVEL3@3", "T5_HIDE_LEVEL4@4",
    "T6_HIDE", "T6_HIDE_LEVEL1@1", "T6_HIDE_LEVEL2@2", "T6_HIDE_LEVEL3@3", "T6_HIDE_LEVEL4@4",
    "T7_HIDE", "T7_HIDE_LEVEL1@1", "T7_HIDE_LEVEL2@2", "T7_HIDE_LEVEL3@3", "T7_HIDE_LEVEL4@4",
    "T8_HIDE", "T8_HIDE_LEVEL1@1", "T8_HIDE_LEVEL2@2", "T8_HIDE_LEVEL3@3", "T8_HIDE_LEVEL4@4",
    // Recursos en bruto: Mineral
    "T4_ORE", "T4_ORE_LEVEL1@1", "T4_ORE_LEVEL2@2", "T4_ORE_LEVEL3@3", "T4_ORE_LEVEL4@4",
    "T5_ORE", "T5_ORE_LEVEL1@1", "T5_ORE_LEVEL2@2", "T5_ORE_LEVEL3@3", "T5_ORE_LEVEL4@4",
    "T6_ORE", "T6_ORE_LEVEL1@1", "T6_ORE_LEVEL2@2", "T6_ORE_LEVEL3@3", "T6_ORE_LEVEL4@4",
    "T7_ORE", "T7_ORE_LEVEL1@1", "T7_ORE_LEVEL2@2", "T7_ORE_LEVEL3@3", "T7_ORE_LEVEL4@4",
    "T8_ORE", "T8_ORE_LEVEL1@1", "T8_ORE_LEVEL2@2", "T8_ORE_LEVEL3@3", "T8_ORE_LEVEL4@4",
    // Recursos en bruto: Fibra
    "T4_FIBER", "T4_FIBER_LEVEL1@1", "T4_FIBER_LEVEL2@2", "T4_FIBER_LEVEL3@3", "T4_FIBER_LEVEL4@4",
    "T5_FIBER", "T5_FIBER_LEVEL1@1", "T5_FIBER_LEVEL2@2", "T5_FIBER_LEVEL3@3", "T5_FIBER_LEVEL4@4",
    "T6_FIBER", "T6_FIBER_LEVEL1@1", "T6_FIBER_LEVEL2@2", "T6_FIBER_LEVEL3@3", "T6_FIBER_LEVEL4@4",
    "T7_FIBER", "T7_FIBER_LEVEL1@1", "T7_FIBER_LEVEL2@2", "T7_FIBER_LEVEL3@3", "T7_FIBER_LEVEL4@4",
    "T8_FIBER", "T8_FIBER_LEVEL1@1", "T8_FIBER_LEVEL2@2", "T8_FIBER_LEVEL3@3", "T8_FIBER_LEVEL4@4",
    // Recursos en bruto: Madera
    "T4_WOOD", "T4_WOOD_LEVEL1@1", "T4_WOOD_LEVEL2@2", "T4_WOOD_LEVEL3@3", "T4_WOOD_LEVEL4@4",
    "T5_WOOD", "T5_WOOD_LEVEL1@1", "T5_WOOD_LEVEL2@2", "T5_WOOD_LEVEL3@3", "T5_WOOD_LEVEL4@4",
    "T6_WOOD", "T6_WOOD_LEVEL1@1", "T6_WOOD_LEVEL2@2", "T6_WOOD_LEVEL3@3", "T6_WOOD_LEVEL4@4",
    "T7_WOOD", "T7_WOOD_LEVEL1@1", "T7_WOOD_LEVEL2@2", "T7_WOOD_LEVEL3@3", "T7_WOOD_LEVEL4@4",
    "T8_WOOD", "T8_WOOD_LEVEL1@1", "T8_WOOD_LEVEL2@2", "T8_WOOD_LEVEL3@3", "T8_WOOD_LEVEL4@4",
    // Recursos procesados: Bloque de Piedra
    "T4_STONEBLOCK",
    "T5_STONEBLOCK", 
    "T6_STONEBLOCK",
    "T7_STONEBLOCK",
    "T8_STONEBLOCK",
    // Recursos procesados: Cuero Refinado
    "T4_LEATHER", "T4_LEATHER_LEVEL1@1", "T4_LEATHER_LEVEL2@2", "T4_LEATHER_LEVEL3@3", "T4_LEATHER_LEVEL4@4",
    "T5_LEATHER", "T5_LEATHER_LEVEL1@1", "T5_LEATHER_LEVEL2@2", "T5_LEATHER_LEVEL3@3", "T5_LEATHER_LEVEL4@4",
    "T6_LEATHER", "T6_LEATHER_LEVEL1@1", "T6_LEATHER_LEVEL2@2", "T6_LEATHER_LEVEL3@3", "T6_LEATHER_LEVEL4@4",
    "T7_LEATHER", "T7_LEATHER_LEVEL1@1", "T7_LEATHER_LEVEL2@2", "T7_LEATHER_LEVEL3@3", "T7_LEATHER_LEVEL4@4",
    "T8_LEATHER", "T8_LEATHER_LEVEL1@1", "T8_LEATHER_LEVEL2@2", "T8_LEATHER_LEVEL3@3", "T8_LEATHER_LEVEL4@4",
    // Recursos procesados: Lingote de Metal
    "T4_METALBAR", "T4_METALBAR_LEVEL1@1", "T4_METALBAR_LEVEL2@2", "T4_METALBAR_LEVEL3@3", "T4_METALBAR_LEVEL4@4",
    "T5_METALBAR", "T5_METALBAR_LEVEL1@1", "T5_METALBAR_LEVEL2@2", "T5_METALBAR_LEVEL3@3", "T5_METALBAR_LEVEL4@4",
    "T6_METALBAR", "T6_METALBAR_LEVEL1@1", "T6_METALBAR_LEVEL2@2", "T6_METALBAR_LEVEL3@3", "T6_METALBAR_LEVEL4@4",
    "T7_METALBAR", "T7_METALBAR_LEVEL1@1", "T7_METALBAR_LEVEL2@2", "T7_METALBAR_LEVEL3@3", "T7_METALBAR_LEVEL4@4",
    "T8_METALBAR", "T8_METALBAR_LEVEL1@1", "T8_METALBAR_LEVEL2@2", "T8_METALBAR_LEVEL3@3", "T8_METALBAR_LEVEL4@4",
    // Recursos procesados: Tela
    "T4_CLOTH", "T4_CLOTH_LEVEL1@1", "T4_CLOTH_LEVEL2@2", "T4_CLOTH_LEVEL3@3", "T4_CLOTH_LEVEL4@4",
    "T5_CLOTH", "T5_CLOTH_LEVEL1@1", "T5_CLOTH_LEVEL2@2", "T5_CLOTH_LEVEL3@3", "T5_CLOTH_LEVEL4@4",
    "T6_CLOTH", "T6_CLOTH_LEVEL1@1", "T6_CLOTH_LEVEL2@2", "T6_CLOTH_LEVEL3@3", "T6_CLOTH_LEVEL4@4",
    "T7_CLOTH", "T7_CLOTH_LEVEL1@1", "T7_CLOTH_LEVEL2@2", "T7_CLOTH_LEVEL3@3", "T7_CLOTH_LEVEL4@4",
    "T8_CLOTH", "T8_CLOTH_LEVEL1@1", "T8_CLOTH_LEVEL2@2", "T8_CLOTH_LEVEL3@3", "T8_CLOTH_LEVEL4@4",
    // Recursos procesados: Tablas de Madera
    "T4_PLANKS", "T4_PLANKS_LEVEL1@1", "T4_PLANKS_LEVEL2@2", "T4_PLANKS_LEVEL3@3", "T4_PLANKS_LEVEL4@4",
    "T5_PLANKS", "T5_PLANKS_LEVEL1@1", "T5_PLANKS_LEVEL2@2", "T5_PLANKS_LEVEL3@3", "T5_PLANKS_LEVEL4@4",
    "T6_PLANKS", "T6_PLANKS_LEVEL1@1", "T6_PLANKS_LEVEL2@2", "T6_PLANKS_LEVEL3@3", "T6_PLANKS_LEVEL4@4",
    "T7_PLANKS", "T7_PLANKS_LEVEL1@1", "T7_PLANKS_LEVEL2@2", "T7_PLANKS_LEVEL3@3", "T7_PLANKS_LEVEL4@4",
    "T8_PLANKS", "T8_PLANKS_LEVEL1@1", "T8_PLANKS_LEVEL2@2", "T8_PLANKS_LEVEL3@3", "T8_PLANKS_LEVEL4@4"
];
const locations = "Brecilien,Bridgewatch,Fort%20Sterling,Lymhurst,Martlock,Thetford,Caerleon";
const apiUrlBase = "https://www.albion-online-data.com/api/v2/stats/prices/";

const resourceNames = {
    "ROCK":"Piedra","HIDE":"Cuero","ORE":"Mineral","FIBER":"Fibra","WOOD":"Madera",
    "STONEBLOCK":"Bloque de Piedra","LEATHER":"Cuero Refinado","METALBAR":"Lingote de Metal",
    "CLOTH":"Tela","PLANKS":"Tablas de Madera"
};

// Variable global para guardar los datos actuales
let marketData = [];

async function fetchPrices() {
    const tbody = document.getElementById("priceBody");
    const errorDiv = document.getElementById("errorMessage");
    const tierFilter = document.getElementById("tierFilter").value;
    const resourceFilter = document.getElementById("resourceFilter").value;
    const cityFilter = document.getElementById("cityFilter").value;
    const enchantmentFilter = document.getElementById("enchantmentFilter").value;

    errorDiv.textContent = "";

    try {
        const filteredResources = resources.filter(r => {
            const tierOk = !tierFilter || r.startsWith(tierFilter);
            const resOk = !resourceFilter || r.includes(resourceFilter);
            const enchOk = !enchantmentFilter || 
                r.includes(`_LEVEL${enchantmentFilter}@${enchantmentFilter}`) || 
                (enchantmentFilter === "0" && !r.includes("_LEVEL"));
            return tierOk && resOk && enchOk;
        });

        if (filteredResources.length === 0) {
            tbody.innerHTML = "<tr><td colspan='9' style='text-align:center;'>No hay recursos con esos filtros</td></tr>";
            marketData = [];
            crearBotonFlips();
            return;
        }

        const chunks = [];
        for (let i = 0; i < filteredResources.length; i += 50) {
            chunks.push(filteredResources.slice(i, i + 50));
        }

        const allData = [];
        for (const chunk of chunks) {
            const url = `${apiUrlBase}${chunk.join(',')}?locations=${locations}`;
            const res = await fetch(url);
            if (!res.ok) continue;
            allData.push(...await res.json());
        }

        tbody.innerHTML = "";
        marketData = [];

        const items = {};
        allData.forEach(item => {
            const tier = item.item_id.match(/^T(\d+)/)?.[1] || "?";
            const ench = item.item_id.match(/@(\d+)/)?.[1] || "0";
            const base = item.item_id.replace(/^T\d+_/, "").replace(/_LEVEL.*$/,"");
            const city = item.city.replace(/%20/g, " ");
            if (cityFilter && city !== cityFilter) return;

            const key = `${item.item_id}-${city}`;
            if (!items[key] || item.sell_price_min > 0) {
                items[key] = {
                    name: resourceNames[base] || base,
                    tier, ench, city,
                    sell_min: item.sell_price_min || 0,
                    sell_max: item.sell_price_max || 0,
                    buy_min: item.buy_price_min || 0,
                    buy_max: item.buy_price_max || 0,
                    date: item.sell_price_min_date || ""
                };
                marketData.push(items[key]);
            }
        });

        Object.values(items).forEach(i => {
            const tr = document.createElement("tr");
            tr.innerHTML = `
                <td>${i.name}</td>
                <td>T${i.tier}</td>
                <td>${i.ench}</td>
                <td>${i.city}</td>
                <td>${i.sell_min.toLocaleString()}</td>
                <td>${i.sell_max.toLocaleString()}</td>
                <td>${i.buy_min.toLocaleString()}</td>
                <td>${i.buy_max.toLocaleString()}</td>
                <td>${i.date || 'N/A'}</td>
            `;
            tbody.appendChild(tr);
        });

        crearBotonFlips();

    } catch (e) {
        errorDiv.textContent = "Error al cargar datos. Reintentando...";
        console.error(e);
    }
}

// === BOTÓN QUE APARECE SOLO CUANDO HAY DATOS ===
function crearBotonFlips() {
    let btn = document.getElementById("btnFlips");
    if (btn) btn.remove();

    const flips = calcularFlips();
    if (flips.length === 0) return;

    btn = document.createElement("button");
    btn.id = "btnFlips";
    btn.innerHTML = `MEJORES FLIPS (${flips.length})`;
    btn.style.cssText = `
        position:fixed; bottom:30px; right:30px; z-index:9999;
        background:#D4A017; color:black; font-weight:bold; font-size:20px;
        padding:18px 30px; border:none; border-radius:50px;
        box-shadow:0 8px 20px rgba(212,160,23,0.8);
        cursor:pointer; font-family:'Cinzel',serif;
        transition:all 0.4s;
    `;
    btn.onmouseover = () => btn.style.transform = "scale(1.15)";
    btn.onmouseout = () => btn.style.transform = "scale(1)";
    btn.onclick = abrirModalFlips;
    document.body.appendChild(btn);
}

function calcularFlips() {
    const porItem = {};
    marketData.forEach(item => {
        if (item.sell_min <= 0) return;
        const id = `${item.name} T${item.tier}${item.ench !== '0' ? '.'+item.ench : ''}`;
        if (!porItem[id]) porItem[id] = [];
        porItem[id].push({ ciudad: item.city, precio: item.sell_min });
    });

    const flips = [];
    Object.entries(porItem).forEach(([nombre, ciudades]) => {
        if (ciudades.length < 2) return;
        ciudades.sort((a,b) => a.precio - b.precio);
        const comprar = ciudades[0];
        const vender = ciudades[ciudades.length-1];
        const profit = vender.precio - comprar.precio;
        if (profit >= 300 || ((profit / comprar.precio) * 100) >= 10) {
            flips.push({
                item: nombre,
                comprar: comprar.ciudad,
                precioCompra: comprar.precio,
                vender: vender.ciudad,
                precioVenta: vender.precio,
                profit,
                margen: ((profit / comprar.precio) * 100).toFixed(1)
            });
        }
    });

    return flips.sort((a,b) => b.profit - a.profit);
}

function abrirModalFlips() {
    const flips = calcularFlips();
    const modal = document.createElement("div");
    modal.style.cssText = "position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.9);z-index:10000;display:flex;align-items:center;justify-content:center;";
    modal.innerHTML = `
        <div style="background:url('https://www.transparenttextures.com/patterns/parchment.png'), #2E1B1B; border:5px double #D4A017; border-radius:20px; padding:40px; max-width:95%; max-height:95%; overflow:auto; box-shadow:0 0 50px #D4A017;">
            <h2 style="text-align:center;color:#FFD700;font-size:3em;margin:0 0 30px;text-shadow:0 0 0 20px gold;">MEJORES FLIPS DEL MERCADO</h2>
            <div style="max-height:70vh; overflow-y:auto;">
                <table style="width:100%;border-collapse:collapse;background:rgba(0,0,0,0.6);">
                    <thead><tr style="background:#2E3B29;">
                        <th style="padding:15px;color:#FFD700;">Item</th>
                        <th style="padding:15px;color:#FFD700;">Comprar</th>
                        <th style="padding:15px;color:#FFD700;">Precio</th>
                        <th style="padding:15px;color:#FFD700;">Vender</th>
                        <th style="padding:15px;color:#FFD700;">Precio</th>
                        <th style="padding:15px;color:#FFD700;">Profit</th>
                        <th style="padding:15px;color:#FFD700;">Margen</th>
                    </tr></thead>
                    <tbody>
                        ${flips.map(f => {
                            const color = f.profit > 50000 ? 'rgba(255,0,255,0.4)' : 
                                         f.profit > 20000 ? 'rgba(255,215,0,0.4)' : 'rgba(0,255,0,0.3)';
                            return `<tr style="background:${color};">
                                <td style="padding:12px;text-align:center;"><strong>${f.item}</strong></td>
                                <td style="padding:12px;text-align:center;color:#0f0;">${f.comprar}</td>
                                <td style="padding:12px;text-align:center;">${f.precioCompra.toLocaleString()}</td>
                                <td style="padding:12px;text-align:center;color:#f00;">${f.vender}</td>
                                <td style="padding:12px;text-align:center;">${f.precioVenta.toLocaleString()}</td>
                                <td style="padding:12px;text-align:center;font-weight:bold;color:#FFD700;">${f.profit.toLocaleString()}</td>
                                <td style="padding:12px;text-align:center;font-weight:bold;color:#FFD700;">${f.margen}%</td>
                            </tr>`;
                        }).join('')}
                    </tbody>
                </table>
            </div>
            <button onclick="this.parentElement.parentElement.remove()" 
                    style="margin-top:30px;padding:15px 40px;background:#D4A017;color:black;border:none;border-radius:15px;font-weight:bold;cursor:pointer;">
                Cerrar
            </button>
        </div>
    `;
    document.body.appendChild(modal);
}

// Primera carga
fetchPrices();
