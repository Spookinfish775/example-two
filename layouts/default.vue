<template>
	<div class="default-layout">
		<div class="menu">
			menu
		</div>
		<div class="content">
			<Nuxt />
		</div>
		<div class="footer">
			footer
		</div>
	</div>
</template>

<script>
function fontSize() {
  let width = 1447; // ширина, от которой идет отсчет
  let fontSize; // минимальный размер шрифта
  let bodyWidth = document.documentElement.clientWidth;

  if (bodyWidth <= 1200) {
    fontSize = 119;
  }
  if (bodyWidth <= 576) {
    fontSize = 245;
  }
  if (bodyWidth <= 320) {
    fontSize = 290;
  }
  if (bodyWidth > 1024) {
    fontSize = 62.5;
  }
  let multiplier = bodyWidth / width; // проверку убрал, пусть шрифт уменьшается если разрешение меньше 1000
  fontSize = Math.floor(fontSize * multiplier);
  document.body.style.fontSize = fontSize + "%";
}
window.onresize = fontSize;
fontSize();
export default {};
</script>

<style lang="scss">
.default-layout {
	width: 100%;
	min-height: 100vh;
	position: relative;
	display: flex;
	flex-direction: column;
	.content {
		flex-grow: 1;
	}
}
</style>