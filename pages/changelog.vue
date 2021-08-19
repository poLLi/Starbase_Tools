<template>
    <section class="full-height">
        <b-container>
            <div class="mb-5">
                <h2 class="title text-primary">Changelog</h2>
                <p class="desc pl-4">well... yea thats what you would expext here</p>
            </div>

            <div class="info">
                <h2 class="title text-monospace">Version 0.0.4</h2>
                <p class="text-muted">Ship-Calculator Improvements</p>
                <div class="pl-4">
                    <p class="text-primary h5">🐛 Bug-Fixes</p>
                    <ul>
                        <li>Fixed several misspellings... yea im bad at that</li>
                    </ul>
                    <p class="text-primary h5">✏️ Improvements</p>
                    <ul>
                        <li>
                            Added a bunch more Tooltips for Informations on certin Calculations (blue exclamation mark)
                        </li>
                        <li>
                            Added Red/Blue Colord Values if some calculation like Energy Generation/Drain when
                            lower/higher
                        </li>
                        <li>Re-Aranged Cards for better visibility</li>
                    </ul>
                    <p class="text-primary h5">✨ Features</p>
                    <ul>
                        <li>Added Reset Funtion for Ship-Calculator</li>
                        <li>Added Cooling</li>
                        <li>Added Tools</li>
                        <li>Added Energy Generation / Drain</li>
                    </ul>
                </div>
            </div>

            <div class="info">
                <h2 class="title text-monospace">Version 0.0.3</h2>
                <p class="text-muted">Ship-Calculator Save / Load function</p>
                <div class="pl-4">
                    <p class="text-primary h5">🐛 Bug-Fixes</p>
                    <ul>
                        <li>Fixed a wrong number in Speed Calculation</li>
                    </ul>
                    <p class="text-primary h5">✏️ Improvements</p>
                    <ul>
                        <li>Changed url to the Ship-Calculator</li>
                        <li>More accurate Ship-Speed Calculations</li>
                    </ul>
                    <p class="text-primary h5">✨ Features</p>
                    <ul>
                        <li>Added Save and Load function for Ship-Calculator</li>
                    </ul>
                </div>
            </div>

            <div class="info">
                <h2 class="title text-monospace">Version 0.0.2</h2>
                <p class="text-muted">Minor Fixed and Improvements</p>
                <div class="pl-4">
                    <p class="text-primary h5">🐛 Bug-Fixes</p>
                    <ul>
                        <li>Fixed some de-DE translation stuff (still alot more todo)</li>
                        <li>Fixed Discord invite Links</li>
                    </ul>
                    <p class="text-primary h5">✏️ Improvements</p>
                    <ul>
                        <li>Added Plamsa Thruster Body and Ring to Forward Thrusters</li>
                        <li>Added Thruster Efficiency Value</li>
                    </ul>
                    <!-- <p class="text-primary h5">✨ Features</p>
                    <ul>
                        <li>Added Database Test Page (WIP)</li>
                    </ul> -->
                </div>
            </div>

            <div class="info">
                <h2 class="title text-monospace">Version 0.0.1</h2>
                <p class="text-muted">Initial Alpha Release</p>
            </div>
        </b-container>
    </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.info {
    margin-top: 20px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.25);

    .title {
        text-decoration: underline;
    }
}
</style>
