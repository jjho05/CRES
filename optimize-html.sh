#!/bin/bash

# Script para optimizar todas las páginas HTML del proyecto CRES
# Reemplaza referencias de imágenes PNG por WebP con fallback

echo "🚀 Optimizando todas las páginas HTML..."
echo ""

# Función para optimizar el <head> de una página
optimize_head() {
    local file="$1"
    echo "  📝 Optimizando <head> de $(basename "$file")..."
    
    # Agregar async a fuentes si no existe
    sed -i '' 's|rel="stylesheet" />|rel="stylesheet" media="print" onload="this.media='\''all'\''" />|g' "$file" 2>/dev/null || true
    
    # Agregar defer a scripts si no existe
    sed -i '' 's|<script src="js/components-loader.js"></script>|<script src="js/components-loader.js" defer></script>|g' "$file"
    sed -i '' 's|<script src="js/menu.js"></script>|<script src="js/menu.js" defer></script>|g' "$file"
    sed -i '' 's|<script src="js/gallery-modal.js"></script>|<script src="js/gallery-modal.js" defer></script>|g' "$file"
}

# Función para reemplazar imágenes PNG por WebP con picture element
optimize_images() {
    local file="$1"
    local count=0
    
    echo "  🖼️  Optimizando imágenes en $(basename "$file")..."
    
    # Crear archivo temporal
    local temp_file="${file}.tmp"
    cp "$file" "$temp_file"
    
    # Buscar todas las líneas con <img src="images/...png"
    while IFS= read -r line; do
        if [[ $line =~ \<img\ src=\"images/([^\"]+\.png)\" ]]; then
            local png_path="${BASH_REMATCH[1]}"
            local webp_path="${png_path%.png}.webp"
            
            # Reemplazar con picture element
            sed -i '' "s|<img src=\"images/${png_path}\"|<picture><source srcset=\"images/${webp_path}\" type=\"image/webp\"><img src=\"images/${png_path}\"|g" "$temp_file"
            sed -i '' "s|class=\"\([^\"]*\)\">|class=\"\1\"></picture>|g" "$temp_file"
            
            ((count++))
        fi
    done < "$file"
    
    if [ $count -gt 0 ]; then
        mv "$temp_file" "$file"
        echo "    ✅ $count imágenes optimizadas"
    else
        rm "$temp_file"
        echo "    ℹ️  No se encontraron imágenes para optimizar"
    fi
}

# Optimizar todas las páginas HTML
for html_file in *.html; do
    if [ -f "$html_file" ]; then
        echo "📄 Procesando: $html_file"
        optimize_head "$html_file"
        optimize_images "$html_file"
        echo ""
    fi
done

# Optimizar components
echo "📁 Procesando components..."
for html_file in components/*.html; do
    if [ -f "$html_file" ]; then
        echo "📄 Procesando: $html_file"
        optimize_head "$html_file"
        optimize_images "$html_file"
        echo ""
    fi
done

echo "✨ ¡Optimización completada!"
