#!/bin/bash

# Script de Optimización de Imágenes para CRES
# Convierte PNG a WebP manteniendo calidad visual

echo "🚀 Iniciando optimización de imágenes..."
echo ""

# Crear directorio para imágenes optimizadas
mkdir -p images/optimized

# Contadores
total_original=0
total_optimized=0
count=0

# Función para convertir y reportar
convert_image() {
    local input="$1"
    local filename=$(basename "$input")
    local output="images/optimized/${filename%.png}.webp"
    
    # Convertir a WebP con calidad 85
    cwebp -q 85 "$input" -o "$output" 2>/dev/null
    
    if [ $? -eq 0 ]; then
        # Obtener tamaños
        size_original=$(stat -f%z "$input")
        size_optimized=$(stat -f%z "$output")
        
        # Calcular reducción
        reduction=$((100 - (size_optimized * 100 / size_original)))
        
        # Formatear tamaños
        size_orig_kb=$((size_original / 1024))
        size_opt_kb=$((size_optimized / 1024))
        
        echo "✅ $filename: ${size_orig_kb}KB → ${size_opt_kb}KB (-${reduction}%)"
        
        # Actualizar totales
        total_original=$((total_original + size_original))
        total_optimized=$((total_optimized + size_optimized))
        count=$((count + 1))
    else
        echo "❌ Error al convertir: $filename"
    fi
}

# Convertir logos en raíz
echo "📁 Convirtiendo logos..."
for img in logo-*.png cres_hero_*.png; do
    if [ -f "$img" ]; then
        convert_image "$img"
    fi
done

echo ""
echo "📁 Convirtiendo imágenes de galería..."
# Convertir imágenes en carpeta images
for img in images/*.png; do
    if [ -f "$img" ]; then
        convert_image "$img"
    fi
done

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "📊 RESUMEN DE OPTIMIZACIÓN"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "Imágenes procesadas: $count"
echo "Tamaño original total: $((total_original / 1024 / 1024))MB"
echo "Tamaño optimizado total: $((total_optimized / 1024 / 1024))MB"
echo "Reducción total: $((100 - (total_optimized * 100 / total_original)))%"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "✨ ¡Optimización completada!"
echo "📂 Imágenes WebP guardadas en: images/optimized/"
