class Model {
    constructor(name, type, size, features, image, link) {
        this.name = name;
        this.type = type;
        this.size = size;
        this.features = features;
        this.image = image;
        this.link = link;
    }
}

const models = [
    new Model(
        'P-Series Quantum',
        'Premier Smart TV',
        'Size 65” | Coming Soon',
        [
            '4K Ultra HD',
            'Dolby Vision™ HDR',
            'Quantum Dot Technology',
            'Quantum Color Spectrum™',
            'Active Full Array Max™'
        ],
        'https://cdn-ssl.vizio.com/skin/frontend/enterprise/vizio_2014/assets/img/overview/overview-cards/p-series-quantum.png?ver=1529610172',
        'https://www.vizio.com/en-ca/p-series-quantum'
    ),
    new Model(
        'P-Series',
        'Performance Smart TV',
        'Sizes 55” - 75”',
        [
            '4K Ultra HD',
            'Dolby Vision™ HDR',
            'Ultra Color Spectrum®',
            'Active Full Array Pro™'
        ],
        'https://cdn-ssl.vizio.com/skin/frontend/enterprise/vizio_2014/assets/img/overview/overview-cards/p-series.png?ver=1529610172',
        'https://www.vizio.com/en-ca/p-series'
    ),
    new Model(
        'M-Series',
        'Modern Smart TV',
        'Sizes 55” - 70”',
        [
            '4K Ultra HD',
            'Dolby Vision™ HDR',
            'Active Full Array Plus™'
        ],
        'https://cdn-ssl.vizio.com/skin/frontend/enterprise/vizio_2014_CA/assets/img/overview/overview-cards/m-series.png?ver=1529610172',
        'https://www.vizio.com/en-ca/m-series'
    ),
    new Model(
        'E-Series',
        'Essential Smart TV',
        'Sizes 43” - 75”',
        [
            '4K Ultra HD',
            'Dolby Vision™ HDR',
            'Active Full Array™'
        ],
        'https://cdn-ssl.vizio.com/skin/frontend/enterprise/vizio_2014/assets/img/overview/overview-cards/e-series.png?ver=1529610172',
        'https://www.vizio.com/en-ca/e-series'
    ),
    new Model(
        'D-Series',
        'Dependable Smart TV',
        'Sizes 24” - 70”',
        [
            '4K Ultra HD',
            'High Dynamic Range'
        ],
        'https://cdn-ssl.vizio.com/skin/frontend/enterprise/vizio_2014/assets/img/overview/overview-cards/d-series.png?ver=1529610172',
        'https://www.vizio.com/en-ca/d-series'
    )
];

function addModels(arr) {
    arr.forEach(item => {
        let featuresList = '';
        item.features.forEach(feature => {
            featuresList += '<li>' + feature + '</li>';
        });
        $('#models').append('<div class ="model-container"><a href=' + item.link
        + ' target="_blank"><div class="tv-model"><img src=' + item.image
        + ' alt="' + item.name + ' TV"><h3>' + item.name + '</h3><h4>'
        + item.type + '</h4><p>' + item.size + '</p><ul>' + featuresList
        + '</ul></div></a></div>');
    });
}

function closeMenuOnClick() {
    $('.nav-link').on('click', function() {
        $('#nav-bar').removeClass('responsive');
        $('#container').css('width', '100%');
        $('.line').addClass('hidden');
        $('.fas').removeClass('fa-times');
        $('.fas').addClass('fa-bars');
    })
}

function toggleMenu() {
    $('#nav-bar').toggleClass('responsive');
    if ($('#nav-bar').hasClass('responsive')) {
        $('#container').css('width', '50%');
        $('.line').removeClass('hidden');
        $('.fas').removeClass('fa-bars');
        $('.fas').addClass('fa-times');
    } else {
        $('#container').css('width', '100%');
        $('.line').addClass('hidden');
        $('.fas').removeClass('fa-times');
        $('.fas').addClass('fa-bars');
    }
}

$(window).resize(function () {
    let viewportWidth = $(window).width();
    if (viewportWidth > 786) {
        $('#nav-bar').removeClass('responsive');
        $('#container').css('width', '100%');
        $('.line').addClass('hidden');
        $('.fas').removeClass('fa-times');
        $('.fas').addClass('fa-bars');
    }
});

//Run on page load
$(function() {
    addModels(models)
    closeMenuOnClick();
});