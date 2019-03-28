var dynIdList = [],
    dynSectionList = [],
    dynTitleList = [],
    dOffIdList = [],
    dOffSectionList = [],
    dOffTitleList = [],
    url = "",
    page = 1,
    tags = [
        {
            'id': 'all-world',
            'place': 'All world',
            'tagName': 'world/world',
            'status': 'x'
        },
        {
            'id': 'europe',
            'place': 'Europe',
            'tagName': 'world/europe-news',
            'status': 'x'
        },
        {
            'id': 'us',
            'place': 'US',
            'tagName': 'us-news/us-news',
            'status': 'x'
        },
        {
            'id': 'americas',
            'place': 'Americas',
            'tagName': 'world/americas',
            'status': 'x'
        },
        {
            'id': 'asia',
            'place': 'Asia',
            'tagName': 'world/south-and-central-asia|world/asia-pacific',
            'status': 'x'
        },
        {
            'id': 'africa',
            'place': 'Africa',
            'tagName': 'world/africa',
            'status': 'x'
        },
        {
            'id': 'middle-east',
            'place': 'Middle East',
            'tagName': 'world/middleeast',
            'status': 'x'
        },
        {
            'id': 'all-tech',
            'place': 'All technology',
            'tagName': 'technology/technology',
            'status': 'x'
        },
        {
            'id': 'cybercrime',
            'place': 'Cybercrime',
            'tagName': 'technology/cybercrime',
            'status': 'x'
        },
        {
            'id': 'gadgets',
            'place': 'Gadgets',
            'tagName': 'technology/gadgets',
            'status': 'x'
        },
        {
            'id': 'internet',
            'place': 'Internet',
            'tagName': 'technology/internet',
            'status': 'x'
        },
        {
            'id': 'silicon-valley',
            'place': 'Silicon Valley',
            'tagName': 'technology/silicon-valley',
            'status': 'x'
        },
        {
            'id': 'ai',
            'place': 'AI',
            'tagName': 'technology/artificialintelligenceai',
            'status': 'x'
        },
        {
            'id': 'social-networking',
            'place': 'Social networking',
            'tagName': 'media/socialnetworking',
            'status': 'x'
        },
        {
            'id': 'cryptocurrencies',
            'place': 'Cryptocurrencies',
            'tagName': 'technology/cryptocurrencies',
            'status': 'x'
        },
        {
            'id': 'climate-change',
            'place': 'Climate Change',
            'tagName': 'environment/climate-change',
            'status': 'x'
        },
        {
            'id': 'health',
            'place': 'Health',
            'tagName': 'society/health|politics/health',
            'status': 'x'
        },
        {
            'id': 'biology',
            'place': 'Biology',
            'tagName': 'science/biology',
            'status': 'x'
        },

        {
            'id': 'all-science',
            'place': 'All science',
            'tagName': 'science/science',
            'status': 'x'
        },
        /*{
            'id': '',
            'place': '',
            'tagName': '',
            'status': 'x'
        },*/
        {
            'id': 'all-sport',
            'place': 'All sport',
            'tagName': 'sport/sport',
            'status': 'x'
        },
        {
            'id': 'football',
            'place': 'Football',
            'tagName': 'football/football',
            'status': 'x'
        },
        {
            'id': 'rugby',
            'place': 'Rugby',
            'tagName': 'sport/rugby-union|sport/rugby-league',
            'status': 'x'
        },
        {
            'id': 'f1',
            'place': 'F1',
            'tagName': 'sport/formulaone',
            'status': 'x'
        },
        {
            'id': 'tennis',
            'place': 'Tennis',
            'tagName': 'sport/tennis',
            'status': 'x'
        },
        {
            'id': 'golf',
            'place': 'Golf',
            'tagName': 'sport/golf',
            'status': 'x'
        },
        {
            'id': 'cycling',
            'place': 'Cycling',
            'tagName': 'sport/cycling',
            'status': 'x'
        },
        {
            'id': 'all-business',
            'place': 'All Business',
            'tagName': 'business/business',
            'status': 'x'
        },
        {
            'id': 'economics',
            'place': 'Economics',
            'tagName': 'business/economics',
            'status': 'x'
        },
        {
            'id': 'banking',
            'place': 'Banking',
            'tagName': 'business/banking',
            'status': 'x'
        },
        {
            'id': 'retail',
            'place': 'Retail',
            'tagName': 'business/retail',
            'status': 'x'
        },
        {
            'id': 'market',
            'place': 'Market',
            'tagName': 'business/stock-markets',
            'status': 'x'
        },
        {
            'id': 'books',
            'place': 'Books',
            'tagName': 'books/books',
            'status': 'x'
        },
        {
            'id': 'music',
            'place': 'Music',
            'tagName': 'music/music',
            'status': 'x'
        },
        {
            'id': 'tv-radio',
            'place': 'TV & Radio',
            'tagName': 'tv-and-radio/tv-and-radio',
            'status': 'x'
        },
        {
            'id': 'art-design',
            'place': 'Art & Design',
            'tagName': 'artanddesign/artanddesign',
            'status': 'x'
        },
        {
            'id': 'film',
            'place': 'Film',
            'tagName': 'film/film',
            'status': 'x'
        },
        {
            'id': 'games',
            'place': 'Games',
            'tagName': 'games/games',
            'status': 'x'
        },
        {
            'id': 'classical',
            'place': 'Classical',
            'tagName': 'music/classical-music-and-opera',
            'status': 'x'
        },
        {
            'id': 'stage',
            'place': 'Stage',
            'tagName': 'stage/stage',
            'status': 'x'
        },

        {
            'id': 'trump-off',
            'place': 'Trump',
            'tagName': 'us-news/donaldtrump|us-news/trump-administration|us-news/trump-russia-inquiry',
            'status': 'x'
        },
        {
            'id': 'brexit-off',
            'place': 'Brexit',
            'tagName': 'politics/eu-referendum',
            'status': 'x'
        },
        {
            'id': 'violence-off',
            'place': 'Violence',
            'tagName': 'society/rape|world/sexual-harassment|world/isis|uk/uksecurity|world/al-qaida|politics/terrorism|us-news/us-crime',
            'status': 'x'
        }
    ],
    len = tags.length, showPic = 'true', showSubHead = 'true', preferedFont = 'medium', preferedTheme = 'light',
    baseUrl = "https://content.guardianapis.com/search?tag=",
    apiKey = "&api-key=b9839b77-8dbe-4e43-befa-1234ff9f4d71", // Please don't steal my API key. You can get one for FREE here -->  http://open-platform.theguardian.com/access/
    //	showBlocks = "&show-blocks=body",
    showBlocks = "&show-fields=body,thumbnail,trailText,lastModified&page-size=22&page=",
    onlyNews = false, moreOptions = false, nAnti = 0,
    u = "https://content.guardianapis.com/tags?&api-key=b9839b77-8dbe-4e43-befa-1234ff9f4d71&page-size=1000&page=",  // Please don't steal my API key. You can get one for FREE here -->  http://open-platform.theguardian.com/access/
    tagSearchBase = "https://content.guardianapis.com/tags?q=";

var jotFormLink = 'https://form.jotform.me/81446715116455';


//var gsTitle = [], gsLink = [];

function changeStatus(place) {
    var id = "";
    for (var i = 0; i < len; i++) {
        if (tags[i].place == place) {
            id = "#" + tags[i].id;
            if (tags[i].status == 'x') {
                tags[i].status = 'i';
                $(id).addClass("selected")
            }
            else {
                tags[i].status = 'x';
                $(id).removeClass("selected")
            }
        }
    }
}

function topicChosen() {
    pass = true;
    for (var i = 0; i < tags.length; i++) {
        var pass = false;
        if (tags[i].status != 'x' && tags[i].status != 'o') {
            pass = true;
            break;
        }


    }

    if (!pass) {
        if (dynIdList.length != 0) {
            pass = true;
        }
    }

    return pass;
}
function spliceDynamicTags(action, splice_id, splice_section, splice_title) {
    if (action == "on") {
        var ind = dynIdList.indexOf(splice_id), dynListLen;
        var $clear = $("#chosen-tags"),
            $chosenTagsField = $("#chosen-tags");


        dynTitleList.splice(ind, 1);
        dynIdList.splice(ind, 1);
        dynSectionList.splice(ind, 1);

        $clear.text("");
        dynListLen = dynIdList.length;

        for (var i = 0; i < dynListLen; i++) {
            //$chosenTagsField.append("YY");
            $chosenTagsField.append("<button onclick=\"spliceDynamicTags('" + "on','" + dynIdList[i] + "','" + dynSectionList[i] + "','" + dynTitleList[i].replace(/\'/g, "\\'") + "')\" class=\"dyn-selected\"><b>" + dynSectionList[i] + "</b>/" + dynTitleList[i] + "</button>")
        }
    }// end of if on

    if (action == "off") {
        {
            var ind = dOffIdList.indexOf(splice_id), dynListLen;
            var $clear = $("#chosen-off"),
                $chosenTagsField = $("#chosen-off");


            dOffTitleList.splice(ind, 1);
            dOffIdList.splice(ind, 1);
            dOffSectionList.splice(ind, 1);

            $clear.text("");
            dynListLen = dOffIdList.length;

            for (var i = 0; i < dynListLen; i++) {
                //$chosenTagsField.append("YY");
                $chosenTagsField.append("<button onclick=\"spliceDynamicTags('" + "off','" + dOffIdList[i] + "','" + dOffSectionList[i] + "','" + dOffTitleList[i].replace(/\'/g, "\\'") + "')\" class=\"dyn-off-button strike-through\"><div class='x-div'><i class='fas fa-times-circle'></i></div><b>" + dOffSectionList[i] + "</b>/" + dOffTitleList[i] + "</button>")
            }
        }// end of if off
    }
}

function appendDynamicTags(dyn_id, dyn_section, dyn_title, source) {
    var $chosenTagsField = $("#chosen-tags");
    if (source == "biscuits") {
        $chosenTagsField.append("<button onclick=\"spliceDynamicTags('" + dyn_id + "','" + dyn_section + "','" + dyn_title.replace(/\'/g, "\\'") + "')\" class=\"dyn-selected\"><b>" + dyn_section + "</b>/" + dyn_title + "</button>");
    }
    if (source == "click") {

        dynIdList.push(dyn_id);
        dynSectionList.push(dyn_section);
        dynTitleList.push(dyn_title);

        $chosenTagsField.append("<button onclick=\"spliceDynamicTags('" + "on','" + dyn_id + "','" + dyn_section + "','" + dyn_title.replace(/\'/g, "\\'") + "')\" class=\"dyn-selected\"><b>" + dyn_section + "</b>/" + dyn_title + "</button>");
    }
}
function appendDynamicOff(dyn_id, dyn_section, dyn_title, source) {
    var $chosenOff = $("#chosen-off");
    /*if(source=="biscuits"){

    }*/
    if (source == "click") {
        dOffIdList.push(dyn_id);
        dOffSectionList.push(dyn_section);
        dOffTitleList.push(dyn_title);

    }
    $chosenOff.append("<button onclick=\"spliceDynamicTags('" + "off','" + dyn_id + "','" + dyn_section + "','" + dyn_title.replace(/\'/g, "\\'") + "')\" class=\"strike-through dyn-off-button\"><div class='x-div'><i class='fas fa-times-circle'></i></div><b>" + dyn_section + "</b>/" + dyn_title + "</button>");
}// end of appendDynamicOff
function searchTags(source) {
    
    if (source == "off") {
        var searchQuery = $("#dynamic-off-input").val();
        //alert(searchQuery);
        var searchUrl = tagSearchBase + searchQuery + "&page-size=22" + apiKey;
        var $offResults = $("#off-results");
        $offResults.text("");
        //window.open(searchUrl);
        $.getJSON(searchUrl, function (data) {
            var stories = data.response.results;
            var tagsLen = stories.length;
            if (tagsLen == 0) {
                $offResults.append('No topics found for <b>"' + searchQuery + '"</b>');
            }
            else {
                for (var i = 0; i < tagsLen; i++) {
                    //stories[i].webTitle = stories[i].webTitle.replace(/\'/g,"\\'");
                    if (stories[i].type != "contributor")
                        $offResults.append("<button onclick = \"appendDynamicOff('" + stories[i].id + "','" + stories[i].sectionName + "','" + stories[i].webTitle.replace(/\'/g, "\\'") + "','click')\" class=\"dyn-off-button\"><div class='x-div'><i class='fas fa-times-circle'></i></div>" + stories[i].sectionName + "</b>/" + stories[i].webTitle + "</button>  ");
                }
            }

        });  //end of JSON
    }// end of if off
    if (source == "on") {
        var searchQuery = $("#tag-query").val();
        var searchUrl = tagSearchBase + searchQuery + 		"&page-size=22" + apiKey;
		
		//window.open(searchUrl); => https://content.guardianapis.com/tags?q=modi&page-size=22&api-key=b9839b77-8dbe-4e43-befa-1234ff9f4d71
        var $tagShowDiv = $("#tag-results");

        $tagShowDiv.text("");
        $.getJSON(searchUrl, function (data) {
            var stories = data.response.results;
            var tagsLen = stories.length;
            if (tagsLen == 0) {
                $tagShowDiv.append('No topics found for <b>"' + searchQuery + '"</b>');
            }
            else {
                for (var i = 0; i < tagsLen; i++) {
                    //stories[i].webTitle = stories[i].webTitle.replace(/\'/g,"\\'");
                    if (stories[i].type != "contributor")
                        $tagShowDiv.append("<button onclick = \"appendDynamicTags('" + stories[i].id + "','" + stories[i].sectionName + "','" + stories[i].webTitle.replace(/\'/g, "\\'") + "','click')\" class=\"search-tag\"><b>" + stories[i].sectionName + "</b>/" + stories[i].webTitle + "</button>  ");
                }
            }

        });  //end of JSON
    }

} // end of searchTags fn
function changeFont(targetSize) {
    if (targetSize == 'small') {
        $('.h-head').css('font-size', '17px');
        $('.trail-head').css('font-size', '15px');

        $('.b-mid h1').css('font-size', '22px');
        $('.trailText').css('font-size', '17px');
        $('.b-mid p').css('font-size', '15px');

    }
    if (targetSize == 'medium') {
        $('.h-head').css('font-size', '20px');
        $('.trail-head').css('font-size', '17px');

        $('.b-mid h1').css('font-size', '25px');
        $('.trailText').css('font-size', '20px');
        $('.b-mid p').css('font-size', '17px');

        $.cookie('fontSize', 'medium', { expires: 88 });
    }
    if (targetSize == 'big') {
        //     $("#results").addClass('to-dark');
        $('.h-head').css('font-size', '23px');
        $('.trail-head').css('font-size', '20px');

        $('.b-mid h1').css('font-size', '28px');
        $('.trailText').css('font-size', '23px');
        $('.b-mid p').css('font-size', '19px');

        $.cookie('fontSize', 'big', { expires: 88 });
    }
}// end of changeFont


function changeTheme(targetTheme) {

    
    if (targetTheme == 'light') {
        preferedTheme = 'light';
        $("#results, #video-results").addClass("results-light");
        $("#results, #video-results").removeClass("results-dark");

        $(".story-item, .video-box").css({
            "background-color": "#ffffff",
            "border-bottom": "2px solid #1A237E",
            "color": "#000000"
        });
        $(".trail-head").css({
            "color": "#616161"
        });

        $(".b-mid").css({
            "background-color": "#ffffff"
        });
        $(".b-mid a").css({
            //"color":"#42A5F5",

            "color": "#1a237e",
            "background-image": "linear-gradient(to bottom,rgba(0,0,0,.68) 50%,rgba(0,0,0,0) 50%)"

        });
        $(".b-mid h1").css({
            "backgrond-color": "#ffffff",
            "color": "#1a2373"
        });
        $(".b-mid p").css("color", "#121212");

        $(".element-image__caption, .element-image__credit").css("color", "#424242");
        $(".trailText").css({
            "background-color": "#ffffff",
            "color": "#616161"
        })
        $("#dark-mode").show();
        $("#light-mode").hide();
    }
    else if (targetTheme == 'dark') {
        preferedTheme = 'dark';
        
        $("#results, #video-results").removeClass("results-light");
        $("#results, #video-results").addClass("results-dark");

        $(".story-item, .video-box").css({
            "background-color": "#455A64",
            "border-bottom": "2px solid #03A9F4",
            "color": "#ffffff"
        });
        
        $(".trail-head, .video-related-links").css({
            "color": "#ECEFF1"
        });

        $(".video-related-links").css({
            "border-bottom" : "1px solid #4FC3F7"
        });


        $(".b-mid").css({
            "background-color": "#424242",
        });
        $(".b-mid a").css({
            //"color":"#42A5F5",

            "color": "#BBDEFB",
            "background-image": "linear-gradient(to bottom,rgba(0,0,0,.68) 50%,rgba(225,225,225,1) 50%)"

        });
        $(".b-mid h1").css({
            "backgrond-color": "#455A64",
            "color": "#ffffff"
        });
        $(".b-mid p").css("color", "#ffffff");

        $(".element-image__caption, .element-image__credit").css("color", "#ECEFF1");
        $(".trailText").css("background-color", "#455A64")
        $("#dark-mode").hide();
        $("#light-mode").show();
    }
}
function biscuits(source) {
    var i, iTopicString = "", dIString = "", dSString = "", dTString = "", iTopicArray = [], dIArray = [], dTArray = [], dSArray = [], dLen = dynIdList.length;
    var dynOffIString = "", dynOffSString = "", dynOffTString = "", dynOffIArray = [], dynOffTArray = [], dynOffSArray = [], dynOffLen = dOffIdList.length;

    if (source == "click") {
        for (i = 0; i < len; i++) {
            iTopicString = iTopicString.concat(tags[i].status);
        }
        for (i = 0; i < dLen; i++) {
            dIString = dIString.concat(dynIdList[i]);
            dIString = dIString.concat("^");

            dSString = dSString.concat(dynSectionList[i]);
            dSString = dSString.concat("^");

            dTString = dTString.concat(dynTitleList[i]);
            dTString = dTString.concat("^");
        }
        for (i = 0; i < dynOffLen; i++) {
            dynOffIString = dynOffIString.concat(dOffIdList[i]);
            dynOffIString = dynOffIString.concat("^");

            dynOffSString = dynOffSString.concat(dOffSectionList[i]);
            dynOffSString = dynOffSString.concat("^");

            dynOffTString = dynOffTString.concat(dOffTitleList[i]);
            dynOffTString = dynOffTString.concat("^");
        }
        if (onlyNews == true) {
            $.cookie('onlyNews', 'true', { expires: 88 });
        }
        else {
            $.cookie('onlyNews', 'false', { expires: 88 });
        }

        $.cookie('itopics', iTopicString, { expires: 88 });

        $.cookie('dSString', dSString, { expires: 88 });
        $.cookie('dIString', dIString, { expires: 88 });
        $.cookie('dTString', dTString, { expires: 88 });



        $.cookie('dynOffSString', dynOffSString, { expires: 88 });
        $.cookie('dynOffIString', dynOffIString, { expires: 88 });
        $.cookie('dynOffTString', dynOffTString, { expires: 88 });
        //*/



    } //end of source == click
    if (source == "delete") {

        var cs = $.cookie();
        for (var c in cs) {
            $.removeCookie(c);
        }

        alert("Cookies are deleted. Next time you read the news, cookies will download again");
    } // end of if(source==delete)
    if (source == "load") {

        if ($.cookie('itopics') == undefined) {

        }
        else {

            $("#nav-news").css("display", "block");

            $("#nav-settings").css("display", "none");
            $("#settings-btn").removeClass("nav-btn-active");

            var onlyNewsString = $.cookie('onlyNews');

            showPic = $.cookie('showPic');
            showSubHead = $.cookie('showSubHead');
            iTopicString = $.cookie('itopics');
            dSString = $.cookie('dSString');
            dIString = $.cookie('dIString');
            dTString = $.cookie('dTString');



            dynOffSString = $.cookie('dynOffSString');
            dynOffIString = $.cookie('dynOffIString');
            dynOffTString = $.cookie('dynOffTString');

            iTopicArray = iTopicString.split('');

            if ($.cookie('fontSize') == 'small') {
                preferedFont = 'small';
            }
            else if ($.cookie('fontSize') == 'medium') {
                preferedFont = 'medium';
            }
            else {
                preferedFont = 'big';
            }

            if (onlyNewsString == 'true') {
                onlyNews = true;
                $("#checkbox").prop('checked', true);
            }
            else {
                onlyNews = false;
            }

            if ($.cookie('theme') == 'light') {
                preferedTheme = 'light';
            }
            if ($.cookie('theme') == 'dark') {
                preferedTheme = 'dark';
            }

            if ($.cookie('moreOptions') == 'true') {
                moreOptions = true;
                $(".cutomise-option-btn").hide();
                $("#extra-settings-div").show();
            }
            else {
                moreOption = false;
            }
            for (i = 0; i < len; i++) {
                tags[i].status = iTopicArray[i];
                if ((tags[i].id == 'all-world' || tags[i].id == 'all-tech' || tags[i].id == 'all-sport' || tags[i].id == 'all-business' || tags[i].id == 'all-science') && tags[i].status == 'i') {
                    var id = "#";
                    id = id.concat(tags[i].id);
                    $(id).parent().children().hide();
                    $(id).show();
                }
                if (tags[i].status == 'o') {
                    nAnti += 1;
                }
            }

            dIArray = dIString.split('^');
            dSArray = dSString.split('^');
            dTArray = dTString.split('^');

            dynOffIArray = dynOffIString.split('^');
            dynOffSArray = dynOffSString.split('^');
            dynOffTArray = dynOffTString.split('^');
            //*/



            dIArray.pop();
            dSArray.pop();
            dTArray.pop();


            dynOffIArray.pop();
            dynOffSArray.pop();
            dynOffTArray.pop();


            //*/

            dLen = dIArray.length;
            dynOffLen = dynOffIArray.length;

            for (i = 0; i < dLen; i++) {
                dynIdList.push(dIArray[i]);
                dynTitleList.push(dTArray[i]);
                dynSectionList.push(dSArray[i]);
            }
            for (i = 0; i < dynOffLen; i++) {
                dOffIdList.push(dynOffIArray[i]);
                dOffTitleList.push(dynOffTArray[i]);
                dOffSectionList.push(dynOffSArray[i]);
            }//*/


            generateUrl("cookie");



            for (i = 0; i < dLen; i++) {
                appendDynamicTags(dynIdList[i], dynSectionList[i], dynTitleList[i], 'biscuits');
            }

            for (i = 0; i < dynOffLen; i++) {
                appendDynamicOff(dOffIdList[i], dOffSectionList[i], dOffTitleList[i], 'biscuits')
            }
            //*/
            if (showPic == 'false') {
                $("#show-pictures").show();
                $("#hide-pictures").hide();
            }
            if (showPic == 'true') {
                $("#show-pictures").hide();
                $("#hide-pictures").show();
            }
            if (showSubHead == 'false') {
                $("#show-subhead").show();
                $("#hide-subhead").hide();
            }
            if (showSubHead == 'true') {
                $("#show-subhead").hide();
                $("#hide-subhead").show();
            }
            for (i = 0; i < len; i++) {
                var id = "#";
                id = id.concat(tags[i].id);
                if (tags[i].status == 'i') {
                    $(id).addClass('selected');
                }
                else if (tags[i].status == 'o') {
                    $(id).addClass('strike-through')
                }
            }

        }



    }// end of source == load
}

function storySwipedLeft(event) {
    $(this).parent().toggle('slide', 500);
    $(this).parent().parent().next().children(':nth-child(2)').toggle('slide', { direction: 'right' }, 500);
}
function share(network, link, title) {
    var socialLink = "", encodedStoryLink = encodeURIComponent(link), encodedTitle = encodeURIComponent(title);
    if (network == "fb") {
        socialLink = socialLink.concat("https://www.facebook.com/sharer/sharer.php?u=");
        //socialLink = socialLink.concat(title);
        socialLink = socialLink.concat(encodedStoryLink);
    }
    else if (network == "twt") {

        socialLink = socialLink.concat("https://twitter.com/home?status=");
        socialLink = socialLink.concat(title);
        socialLink = socialLink.concat(encodedStoryLink);
    }
    else if (network == "lnk") {
        socialLink = socialLink.concat("https://www.linkedin.com/shareArticle?mini=true&url=");
        socialLink = socialLink.concat(encodedStoryLink);
    }
    else if (network == "fbm") {
        socialLink = socialLink.concat("fb-messenger://share?");
        socialLink = socialLink.concat("app_id=144339799582122&redirect_uri=");
        socialLink = socialLink.concat(encodedStoryLink);
        socialLink = socialLink.concat("&link=");
        socialLink = socialLink.concat(encodedStoryLink);
        socialLink = socialLink.concat("%3FCMP%3Dshare_btn_me");



    }
    else if (network == "wa") {
        socialLink = socialLink.concat("whatsapp://send?text=");
        socialLink = socialLink.concat(title);
        socialLink = socialLink.concat(encodedStoryLink);
    }
    else if (network == "waw") {
        socialLink = socialLink.concat("https://web.whatsapp.com/send?text=");
        socialLink = socialLink.concat(title);
        socialLink = socialLink.concat(encodedStoryLink);
    }
    else if (network == "mail") {
        socialLink = socialLink.concat("mailto:?subject=");
        socialLink = socialLink.concat(encodedTitle);
        socialLink = socialLink.concat("&body=");
        socialLink = socialLink.concat(encodedStoryLink);


    }

    window.open(socialLink);
}
function storySwipedRight(event) {

    $(this).parent().toggle('slide', { direction: 'right' }, 500);
    $(this).parent().parent().prev().children(':nth-child(2)').toggle('slide', 500);
}
/*function storyClickedLeft(event)
{
  $(this).hide();
  //$(this).parent().parent().parent().toggle('slide',{direction:'right'},500);
  //$(this).parent().parent().parent().parent().prev().children(':nth-child(2)').toggle('slide',500);
}*/
function changeAntiStats(antiPlace) {
    antiPlace.replace(/\s/g, 's');
    var id = "";
    for (var i = 0; i < len; i++) {
        if (tags[i].place == antiPlace) {
            id = "#" + tags[i].id;
            if (tags[i].status == 'x') {
                tags[i].status = 'o';
                nAnti += 1;
                $(id).addClass("strike-through")
            }
            else {
                nAnti -= 1;
                tags[i].status = 'x';
                $(id).removeClass("strike-through")
            }
        }
    }
}


function changeOnlyNews() {
    if (!onlyNews) {
        onlyNews = true;
        /*$("#onlyNews").addClass("selected");*/
    }
    else {
        onlyNews = false;
        /*$("#onlyNews").removeClass("selected");*/
    }

}
function appendVideoContext() {

    var videoTitle = $(this).html()
    videoTitle = videoTitle.replace(/:|'|"|’|‘|,|\?|–/g, '');

   // alert(videoTitle);
    var $relatedStries = $(this).next();    //Typo :( One downside of code completion
    $relatedStries.text("");
    //$relatedStries.show();
    //alert($relatedStries.html());

    var searchUrl = "https://content.guardianapis.com/search?q=";
    searchUrl = searchUrl.concat(videoTitle + apiKey);
    searchUrl = searchUrl.concat("&page-size=6");


    $.getJSON(searchUrl, function (data) {
        var stories = data.response.results;
        var dataLen = 6;

        for (var i = 0; i < 5; i++) {
            $relatedStries.show();
            $relatedStries.append("<div class='video-related-links' onclick='showStory(\"" + stories[i].id + "\", \"video\")'>" + stories[i].webTitle + "</div>");
        }
    });
}
function appendVideos() {

    
    $.get(
        "https://www.googleapis.com/youtube/v3/channels", {
            part: 'contentDetails',
            forUsername: 'guardianwires',
            key: 'AIzaSyCFxm_101Io4_WGfoEp-4ldtaLbuYDp9uI'

        },
        function (data) {
            $.each(data.items, function (i, item) {
                var pid = item.contentDetails.relatedPlaylists.uploads;
                getVids(pid);

            });
        }
    );


    function getVids(pid) {
        $.get(
            "https://www.googleapis.com/youtube/v3/playlistItems", {
                part: 'snippet',
                maxResults: 10,
                playlistId: pid,
                key: 'AIzaSyCFxm_101Io4_WGfoEp-4ldtaLbuYDp9uI'

            },
            function (data) {
                $.each(data.items, function (i, item) {
                    var output, vTitle, vId;

                    vTitle = item.snippet.title;
                    // pushStories(vTitle);
                    vId = item.snippet.resourceId.videoId;

                    $("#video-results").append('<div class="video-box"><div class = "iframe-container"><iframe class = "youTube-iframe" src="//www.youtube.com/embed/' + vId + '?modestbranding=1"></iframe></div><h2 class="video-h2">' + vTitle + '</h2><div class="related-stories"></div></div><br>');
                });
            }
        );
        changeTheme(preferedTheme);
    } // end of getVids function

    
} //end of appendVideos function

function showStory(storyURL, target) {
    storyURL = "https://content.guardianapis.com/" + storyURL + "?&show-fields=body,thumbnail,trailText" + apiKey;
    $.getJSON(storyURL, function (data) {
        var stories = data.response.content;

        if (target == "video") {
            $("#video-results").append("<div class='story-body'><div class='b-mid'><img class='thumbnail-head' src=" + stories.fields.thumbnail + "><h1>" + stories.webTitle + "</h1><p class='trailText'>" + stories.fields.trailText + "</p>" + stories.fields.body + "<br> ___________________________<br></div><div class='b-bottom'><div class='bottom-row-2'><i class='fas fa-times b-fn'></i></div></div></div>");
        }
        else if (target == "text") {

            $("#results").append("<div class='story-body'><div class='b-mid'><img class='thumbnail-head' src=" + stories.fields.thumbnail + "><h1>" + stories.webTitle + "</h1><p class='trailText'>" + stories.fields.trailText + "</p>" + stories.fields.body + "<br><br>____________________________<br></div><div class='b-bottom'><div class='bottom-row-2'><a href='https://lwapp.surge.sh'><i class='fas fa-times b-fn'></i></a></div></div></div>");
        }

        $(".story-body").show();




    })  //end og getJSON

}

/* function showShareStories(storyID){

    var shareStoriesURL = "https://content.guardianapis.com/" + storyID +"?show-fields=body,thumbnail,trailText,lastModified" + apiKey;


    appendResults(shareStoriesURL, "share");

    /*
    $.getJSON(shareStoriesURL, function(data){
        var stories = data.response.content;
        var $results = $("#results");

           $(results).text(stories.webTitle);
      //  $(results).append("<div class='story-item item-light'><div class='story-body'><div class='b-mid'><img class='thumbnail' src='" + stories.fields.thumbnail +"'><h1>" + stories.webTitle+ "</h1>" +  "<p class='trailText'>" +stories.fields.trailText + "</p>"+  stories.fields.body +  " <hr><br><br></div><div class='b-bottom'><div class='share-btn-div'><button class='url-btn'>"+ stories.webUrl +"</button><button class='url-btn'>"+ stories.webTitle +"</button><i class='fab fa-facebook-f social-btn' id='fb'></i><i class='social-btn fab fa-twitter' id='twt'></i><i class='fab fa-linkedin-in social-btn' id='lnk'></i><a href = "+ mail_link +"><i class='far fa-envelope social-btn-dead' id='mail'></i></a><a href="+ fbm_link +"><i class='fab fa-facebook-messenger social-btn-dead' id='fbm'></i></a><i class='fab fa-whatsapp social-btn' id='wa'></i><i class='fab fa-pinterest-p social-btn' id='pin'></i></div><div class='botton-row-2'><i class='fas b-fn fa-arrow-left'></i><i class='fas b-fn fa-times'></i><i class='fas b-fn fa-share-alt'></i><i class='fas b-fn fa-arrow-right'></i></div></div></div></div>");
    })

    */
//} // end of showShareStories */

function appendResults(url, source) {

    var $results = $("#results");
    if (source == "show-more") {

    }
    else {
        $results.text("");
        $results.append("<p class='patience-item'><span class ='patience-head'>Loading..<br></span><span class = 'patience-trail'>Please wait</span></p><p class='patience-item'><span class = 'patience-head'>“Genius is nothing but a great aptitude for patience.”<br></span><span class = 'patience-trail'>- George-Louis de Buffon</span></p><br>");
    }
    if (source == "share") {

    }
    else {

        $.getJSON(url, function (data) {
            var stories = data.response.results;
            var dataLen = stories.length;

            var socialLink = "", encodedStoryLink = "", encodedTitle = "", fbm_link = "", mail_link = "";
            $results.text("");
            //<button class='pic-button' id='dark-mode'>Dark Mode</button><button class='pic-button' id='light-mode'>Light Mode</button>
            $results.append("<button id='show-video-results' class='media-change-button'><i class='fas fa-video'></i></button><div id='font-settings'><button class='pic-button' id='hide-pictures'>Hide pictures</button><button class='pic-button' id='show-pictures'>Show Pictures</button><button class='pic-button' id='hide-subhead'>Hide subheading</button><button class='pic-button' id='show-subhead'>Show subheading</button><button class='pic-button' id='dark-mode'>Dark Mode</button><button class='pic-button' id='light-mode'>Light Mode</button><br><div class='font-size-btn small-font-btn'><br>A</div><div class='font-size-btn medium-font-btn'><br>A</div><div class='font-size-btn big-font-btn'>A<br></div></div><button id='custom-font-btn'><span id='smalla'>A</span><span id='biga'>A</span></button>");
            for (var i = 0; i < dataLen; i++) {
                encodedStoryLink = encodeURIComponent(stories[i].webUrl);
                fbm_link = "fb-messenger://share?app_id=144339799582122&redirect_uri=" + encodedStoryLink + "&link=" + encodedStoryLink + "%3FCMP%3Dshare_btn_me";
                mail_link = "mailto:?subject=" + encodedTitle + "&body=" + encodedStoryLink;
                //$(results).append("<div class='story-item'><div class='story-head'>" +stories[i].webTitle +"</div><div class='story-body'><div class='b-mid'><br>" + stories[i].webTitle+ stories[i].blocks.body[0].bodyHtml+ "<br><br></div><div class='b-bottom'><div class='x'><i class='fas fa-times'></i></div><i class='fas fa-share-alt social-btn'></i><i class='fab fa-facebook-f social-btn'></i><i class='social-btn fab fa-twitter'></i><i class='fab fa-linkedin-in social-btn'></i><i class='far fa-envelope social-btn'></i><i class='fab fa-facebook-messenger social-btn'></i><i class='fab fa-whatsapp social-btn'></i><i class='fab fa-pinterest-p social-btn'></i></div></div></div>");
                //$(results).append(stories[i].webTitle);
                $(results).append("<div class='story-item item-light'><div class='story-head'><img class='thumbnail-head' src='" + stories[i].fields.thumbnail + "'><div class='h-head'>" + stories[i].webTitle + "</div><div class='trail-head'>" + stories[i].fields.trailText + "</div></div><div class='story-body'><div class='b-mid'><img class='thumbnail' src='" + stories[i].fields.thumbnail + "'><h1>" + stories[i].webTitle + "</h1>" + "<p class='trailText'>" + stories[i].fields.trailText + "</p>" + stories[i].fields.body + " <hr><br><br></div><div class='b-bottom'><div class='share-btn-div'><button class='url-btn'>" + stories[i].id + "</button><button class='url-btn'>" + stories[i].webTitle + "</button><i class='fab fa-facebook-f social-btn' id='fb'></i><i class='social-btn fab fa-twitter' id='twt'></i><i class='fab fa-linkedin-in social-btn' id='lnk'></i><a href = " + mail_link + "><i class='far fa-envelope social-btn-dead' id='mail'></i></a><a href=" + fbm_link + "><i class='fab fa-facebook-messenger social-btn-dead' id='fbm'></i></a><i class='fab fa-whatsapp social-btn' id='wa'></i><i class='fab fa-whatsapp social-btn' id='waw'></i><i class='fab fa-pinterest-p social-btn' id='pin'></i></div><div class='botton-row-2'><i class='fas b-fn fa-arrow-left'></i><i class='fas b-fn fa-times'></i><i class='fas b-fn fa-share-alt'></i><i class='fas b-fn fa-arrow-right'></i></div></div></div></div>");
                if (i == 4) {
                    $(results).append("<div class='story-item'><div class='story-head'><img class='thumbnail-head' src='" + "metaimg.jpg" + "'><div class='h-head'>" + "Get the LittleWord app" + "</div><div class='trail-head'>" + "0MB. Instant download" + "</div></div><div class='story-body'><div class='b-mid'><img class='thumbnail' src='" + 'metaimg.jpg' + "'><h1>" + "Get the LW app now" + "</h1>" + "<p class='trailText'>" + "0MB. Download in 2 taps" + "</p>" + "<p>Here's how to get out web app.<br> Click  <i class='fas fa-ellipsis-v'></i>  >  Add to homescreen  >   Enjoy! </p><br><img src='howto.gif' id='howto-gif'>" + "<p> <a href = '" + jotFormLink + "'> Tell us what you think</a> Your feedback will help us improve and it takes less than a minute</p>" + "<hr><br><br></div><div class='b-bottom'><div class='share-btn-div'><button class='url-btn'>" + "https://lwapp.surge.sh" + "</button><button class='url-btn'>" + "A smarter way to browse TheGuardian" + "</button><i class='fab fa-facebook-f social-btn' id='fb'></i><i class='social-btn fab fa-twitter' id='twt'></i><i class='fab fa-linkedin-in social-btn' id='lnk'></i><a href = " + mail_link + "><i class='far fa-envelope social-btn-dead' id='mail'></i></a><a href=" + fbm_link + "><i class='fab fa-facebook-messenger social-btn-dead' id='fbm'></i></a><i class='fab fa-whatsapp social-btn' id='wa'></i><i class='fab fa-whatsapp social-btn' id='waw'></i><i class='fab fa-pinterest-p social-btn' id='pin'></i></div><div class='botton-row-2'><i class='fas b-fn fa-arrow-left'></i><i class='fas b-fn fa-times'></i><i class='fas b-fn fa-share-alt'></i><i class='fas b-fn fa-arrow-right'></i></div></div></div></div>");
                }
            }


            if (showPic == 'false') {
                $(".thumbnail-head").hide();
            }
            if (showSubHead == 'false') {
                $(".trail-head").hide();
            }
            $(results).append("<div class='story-item more-item'><div class='more-head'><div class='h-head more-news'>Show more news</div><div class='trail-head'></div></div><div class='story-body'><div class='b-mid'><h1>You've reached the end of your feed</h1><p class='trailText'> Click<button class='more-link more-news'>here</button>to load more news</p><br><br></div><div class='b-bottom'><div class='share-btn-div'></div><div class='botton-row-2'></div></div></div></div>");

            changeFont(preferedFont);
            changeTheme(preferedTheme);
        });     // end of getJSON
    }

}   //
function generateUrl(initiatedBy) {
    var urlTagsPro = "(", urlTagsAnti = "(", firstPro = true, firstAnti = true, firstDynAnti = true, i, dynLen = dynIdList.length, dynOffLen = dOffIdList.length;
    for (i = 0; i < len; i++) {
        if (tags[i].status == 'i') {
            if (!firstPro)
                urlTagsPro = urlTagsPro.concat('|');
            urlTagsPro = urlTagsPro.concat(tags[i].tagName);
            firstPro = false;
        }

        if (tags[i].status == 'o') {
            if (!firstAnti)
                urlTagsAnti = urlTagsAnti.concat('|');
            urlTagsAnti = urlTagsAnti.concat(tags[i].tagName);
            firstAnti = false;
        }
    }

    for (i = 0; i < dynLen; i++) {
        if (firstPro == true && i == 0) {
            urlTagsPro = urlTagsPro.concat(dynIdList[i]);
        }
        else {
            urlTagsPro = urlTagsPro.concat("|");
            urlTagsPro = urlTagsPro.concat(dynIdList[i]);
        }
    }
    for (i = 0; i < dynOffLen; i++) {
        if (firstAnti == true && i == 0) {
            urlTagsAnti = urlTagsAnti.concat(dOffIdList[i]);
        }
        else {
            urlTagsAnti = urlTagsAnti.concat("|");
            urlTagsAnti = urlTagsAnti.concat(dOffIdList[i]);
        }
    }
    urlTagsPro = urlTagsPro.concat(')');
    urlTagsAnti = urlTagsAnti.concat(')');

    if (onlyNews) {
        urlTagsPro = urlTagsPro.concat(',tone/news');
        if (nAnti > 0)
            url = baseUrl + urlTagsPro + showBlocks + page + ",-" + urlTagsAnti + apiKey;
        else {

            url = baseUrl + urlTagsPro + showBlocks + page + apiKey;
        }
    }

    else {
        if (nAnti > 0 || dynOffLen > 0)
            url = baseUrl + urlTagsPro + ",-" + urlTagsAnti + showBlocks + page + apiKey;
        else
            url = baseUrl + urlTagsPro + showBlocks + page + apiKey;

    }

    //window.open(url);
    if (initiatedBy == "more-news-btn") {
        appendResults(url, "show-more");
    }
    else {
        appendResults(url, "load");
    }
}



function all() {

    $("#settings-btn").addClass("nav-btn-active");
    var currentURL = $(location).attr("href");

    if (currentURL.indexOf("storyID=") != -1) {
        var storyID = currentURL.slice(currentURL.indexOf("storyID=") + 8);

        // var shareStoriesURL = "https://content.guardianapis.com/" + storyID +"?show-fields=body,thumbnail,trailText,lastModified" + apiKey;

        showStory(storyID, "text");

        $("#nav-settings").css("display", "none");
        $("#nav-news").css("display", "block");

        $("#settings-btn").removeClass("nav-btn-active");
    }
    else {
        biscuits("load");
    }


    $("#light-mode").hide();

    $(".tag-button").click(function () { var place = $(this).text(); changeStatus(place) });


    $('body').on('click', '.search-tag', function () {
        $(this).hide();
    })
    $('body').on('click', '.story-head', function () {
        $(this).next().toggle();
    });

    $("body").on("click", ".video-h2", appendVideoContext);
    $('body').on('click', '.fa-times', function () {
        //$('.story-body').css("display","none");
        $('.story-body').fadeOut("slow");

    });

    $('body').on('click', '.social-btn', function () {
        var network = $(this).attr('id');
        var link = $(this).parent().children(':nth-child(1)').text();
        link = "https://lwapp.surge.sh?storyID=".concat(link);
        link = link.concat(" ")

        var title = $(this).parent().children(':nth-child(2)').text();
        title = title.concat(" ");
        share(network, link, title);
    });
    $('body').on('click', '.fa-share-alt', function () {

        //$('.social-btn').css("display","inline-block");
        $('.share-btn-div').toggle();

        $('.url-btn').css('display', 'none');
        //$(this).parent().hide() ;
    });
    //$(".off-button").click(function () { var antiPlace = $(this).text(); changeAntiStats(antiPlace); });

    $('body').on('click', '.dyn-off-button', function () {
        //var antiPlace = $(this).text();
        //changeAntiStats(antiPlace);
        $(this).hide();
    })
    /*$("#onlyNews").click(function(){ changeOnlyNews();});*/
    $('input[type=checkbox]').removeAttr('checked');
    $("#checkbox").click(function () { changeOnlyNews(); });
    $(".cutomise-option-true").click(function () {
        $(".cutomise-option-btn").hide();
        $("#extra-settings-div").show();
        moreOptions = true;
        $.cookie('moreOptions', 'true', { expires: 88 });
    })
    $(".Submit").click(function () {
        /* var place = $(this).text();*/
        if (topicChosen()) {
            generateUrl("documentLoad");
            biscuits("click");
            $("#nav-settings").css("display", "none");
            $("#nav-news").css("display", "block");

            $("#settings-btn").removeClass("nav-btn-active");
        }
        else {
            alert("Choose atleast one topic");
        }

    });

    /*$("body").on("click","#show-video-results", function(){
       $("#results").hide();
       $("#video-results").show();
       $("#video-results").append("Yo");
    });*/

    $("body").on("click", ".media-change-button", function () {
        $("#results").toggle();
        $("#video-results").toggle();

    });
    $("#only-news-query").click(function () {
        $("#only-news-answer").toggle();
    })
    $("#getTags").click(function () { appendTags(); });
    $("#search-form").submit(function () {
        searchTags("on");
        return false;
    });
    $("#off-form").submit(function () {
        searchTags("off");
        return false;
    });
    //$("#settings-btn").addClass("nav-btn-active");
    //$("#delete-cookies").click(biscuits("delete"));
    $(".nav-btn").click(function () {
        $("#nav-settings").css("display", "none");
        $("#nav-news").css("display", "none");
        $("#nav-info").css("display", "none");
        $("#settings-btn").removeClass("nav-btn-active");
        $("#info-btn").removeClass("nav-btn-active");
        $(this).addClass("nav-btn-active");
        $("#news-btn").removeClass("nav-btn-active");
    });
    $("body").on("click", "#custom-font-btn", function () {
        $("#font-settings").toggle();
        //$("#font-settings").addClass('hide-option');
    });

    $("body").on("click", "#hide-pictures", function () {
        $(this).toggle();
        $("#show-pictures").toggle();
        $(".thumbnail-head").hide();
        showPic = 'false';
        $.cookie('showPic', 'false', { expires: 88 });
    });

    $("body").on("click", "#show-pictures", function () {
        $(this).toggle();
        $("#hide-pictures").toggle();
        $(".thumbnail-head").show();

        showPic = 'true';
        $.cookie('showPic', 'true', { expires: 88 });
    });

    $("body").on("click", "#hide-subhead", function () {
        $(this).toggle();
        $("#show-subhead").toggle();
        $(".trail-head").hide();

        showSubHead = 'false';
        $.cookie('showSubHead', 'false', { expires: 88 });

    });

    $("body").on("click", "#show-subhead", function () {
        $(this).toggle();
        $("#hide-subhead").toggle();
        $(".trail-head").show();

        showSubHead = 'true';
        $.cookie('showSubHead', 'true', { expires: 88 });
    });

    $("body").on('click', '.small-font-btn', function () {
        changeFont('small');
        $.cookie('fontSize', 'small', { expires: 88 });
    });

    $("body").on('click', '.medium-font-btn', function () {
        changeFont('medium');
    });

    $("body").on('click', '.big-font-btn', function () {
        changeFont('big');
    });

    $("body").on('click', '#dark-mode', function () {
        $.cookie('theme', 'dark', { expires: 88 });
        changeTheme('dark');
    });
    $("body").on('click', '#light-mode', function () {
        $.cookie('theme', 'light', { expires: 88 });
        changeTheme('light');
    });
    $("#settings-btn").click(function () {
        $("#nav-settings").css("display", "block");

    });
    $("#news-btn").click(function () {
        if (topicChosen() == true) {
            $("#nav-news").css("display", "block");
            generateUrl("navClick");
            biscuits("click");
        }
        else {
            alert("Choose atleast one topic");
            $("#nav-settings").show();
        }

    });

    $("#info-btn").click(function () {

        $("#nav-info").css("display", "block");
    });
    $(".cover").click(function () {
        $(this).css("display", "none");
    });

    $(".all-btn").click(function () {
        $(this).parent().children().toggle();
        $(this).show();
    });
    //$( ".story-body" ).on( "swipe", storySwiped );
    $('body').on('swipeleft', '.b-mid', storySwipedLeft);
    $('body').on('swiperight', '.b-mid', storySwipedRight);
    $('body').on('click', '.more-news', function () {
        $('.more-item').hide();
        page += 1;
        generateUrl("more-news-btn");

    });

    /*$('body').on("click", '#show-video-results', appendVideos)
    {

    }*/

    $('body').on("click", '#show-video-results', appendVideos);
    $('body').on('click', '.fa-arrow-left', function () {
        $(this).parent().parent().parent().hide('slide', { direction: 'right' }, 500);
        $(this).parent().parent().parent().parent().prev().children(':nth-child(2)').show('slide', 500);


    });
    $('body').on('click', '.fa-arrow-right', function () {
        $(this).parent().parent().parent().hide('slide', 500);
        $(this).parent().parent().parent().parent().next().children(':nth-child(2)').show('slide', { direction: 'right' }, 500);
    });

    return false;
}
$(document).ready(all);
