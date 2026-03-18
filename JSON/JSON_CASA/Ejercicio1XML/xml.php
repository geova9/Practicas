<?php
// Esta línea le dice al navegador que trate este archivo como XML
header('Content-Type: text/xml');
echo '<?xml version="1.0" encoding="UTF-8"?>';
?>
<?xml version="1.0" encoding="UTF-8"?>
<inventario>
    <producto id="1">
        <nombre>Teclado Mecánico</nombre>
        <stock>15</stock>
        <precio>85</precio>
    </producto>
    <producto id="2">
        <nombre>Ratón Gaming</nombre>
        <stock>3</stock>
        <precio>40</precio>
    </producto>
    <producto id="3">
        <nombre>Monitor 24"</nombre>
        <stock>7</stock>
        <precio>150</precio>
    </producto>
</inventario>