import React, {Component, useEffect, useState} from "react";
import RecipeChoices from "./RecipeChoices";
import drinksJson from "./drinks.json";

const BaristaForm = () => {
    const [inputs, setInputs] = useState({
       'espresso': '',
       'steamed-milk': '',
       'foamed-milk': '',
       'hot-water': '',
       'warm-milk': '',
       'foam': '',
       'whipped-cream': '',
       'ice-cream': '',
       'size': ''
    });

    const [currentDrink, setCurrentDrink] = useState('');
    const [trueRecipe, setTrueRecipe] = useState({});
    const [correctEspresso, setCheckedEspresso] = useState('');
    const [correctSteamedMilk, setCheckedSteamedMilk] = useState('');
    const [correctFoamedMilk, setCheckedFoamedMilk] = useState('');
    const [correctHotWater, setCheckedHotWater] = useState('');
    const [correctWarmMilk, setCheckedWarmMilk] = useState('');
    const [correctFoam, setCheckedFoam] = useState('');
    const [correctWhippedCream, setCheckedWhippedCream] = useState('');
    const [correctIceCream, setCheckedIceCream] = useState('');
    const [correctSize, setCheckedSize] = useState('');

    // if everything is correcet
    const [allCorrect, setAllCorrect] = useState(false);

    const ingredients = {
        'espresso': ['none', '1 shot', '2 shots', '3 shots', '4 shots'],
       'steamed-milk': ['none', '1 oz', '2 oz', '3 oz', '4 oz'],
       'foamed-milk': ['none', '1 oz', '2 oz', '3 oz', '4 oz'],
       'hot-water': ['none', '1 oz', '2 oz', '3 oz', '4 oz'],
       'warm-milk': ['none', '1 oz', '2 oz', '3 oz', '4 oz'],
       'foam': ['none', '1 oz', '2 oz', '3 oz', '4 oz'],
       'whipped-cream': ['none', '1 oz', '2 oz', '3 oz', '4 oz'],
       'ice-cream': ['none', '1 oz', '2 oz', '3 oz', '4 oz'],
       'size': ['1 oz', '2 oz', '3 oz', '4 oz', '5 oz', '6 oz', '7 oz', '8 oz', '9 oz']
    };

    const getNextDrink = () => { // function to select random drink (another)
        const randomDrinkIndex = Math.floor(Math.random() * drinksJson.drinks.length);
        const newDrink = drinksJson.drinks[randomDrinkIndex];

        setCurrentDrink(newDrink.name);
        setTrueRecipe(newDrink.ingredients);
    }

    // initialize on first load
    useEffect(() => {
        getNextDrink();
    }, []);

    const onNewDrink = (e) => {
        e.preventDefault(); // prevent page reload
        setInputs({
            'espresso': '',
            'steamed-milk': '',
            'foamed-milk': '',
            'hot-water': '',
            'warm-milk': '',
            'foam': '',
            'whipped-cream': '',
            'ice-cream': '',
            'size': ''
        });
        getNextDrink();

        // set each state variable to empty strings
        setCheckedEspresso('');
        setCheckedSteamedMilk('');
        setCheckedFoamedMilk('');
        setCheckedHotWater('');
        setCheckedWarmMilk('');
        setCheckedFoam('');
        setCheckedWhippedCream('');
        setCheckedIceCream('');
        setCheckedSize('');
    };

    const onCheckAnswer = (e) => {

        let ifEverythingCorrect = true;

        e.preventDefault(); // add this to prevent reload
        if (trueRecipe.espresso !== inputs['espresso']) {
            setCheckedEspresso('wrong');
            ifEverythingCorrect = false;
        } else {
            setCheckedEspresso('correct');
        }

        if (trueRecipe['steamed-milk'] !== inputs['steamed-milk']) {
            setCheckedSteamedMilk('wrong');
            ifEverythingCorrect = false;
        } else {
            setCheckedSteamedMilk('correct');
        }

        if (trueRecipe['foamed-milk'] !== inputs['foamed-milk']) {
            setCheckedFoamedMilk('wrong');
            ifEverythingCorrect = false;
        } else {
            setCheckedFoamedMilk('correct');
        }

        if (trueRecipe['hot-water'] !== inputs['hot-water']) {
            setCheckedHotWater('wrong');
            ifEverythingCorrect = false;
        } else {
            setCheckedHotWater('correct');
        }

        if (trueRecipe['warm-milk'] !== inputs['warm-milk']) {
            setCheckedWarmMilk('wrong');
            ifEverythingCorrect = false;
        } else {
            setCheckedWarmMilk('correct');
        }

        if (trueRecipe.foam !== inputs['foam']) {
            setCheckedFoam('wrong');
            ifEverythingCorrect = false;
        } else {
            setCheckedFoam('correct');
        }

        if (trueRecipe['whipped-cream'] !== inputs['whipped-cream']) {
            setCheckedWhippedCream('wrong');
            ifEverythingCorrect = false;
        } else {
            setCheckedWhippedCream('correct');
        }

        if (trueRecipe['ice-cream'] !== inputs['ice-cream']) {
            setCheckedIceCream('wrong');
            ifEverythingCorrect = false;
        } else {
            setCheckedIceCream('correct');
        }

        if (trueRecipe.size !== inputs['size']) {
            setCheckedSize('wrong');
            ifEverythingCorrect = false;
        } else {
            setCheckedSize('correct');
        }
        setAllCorrect(ifEverythingCorrect); // shows message if all is correct
    };

    return (
        <div>
            <h2 className="order-title">Hi, I'd like to order a: </h2>
            <div className="drink-container">
                <div className="complete-header">
                    <h2 className="mini-header">
                        {currentDrink}
                    </h2>

                    <button 
                        type="new-drink-button" 
                        className="button newdrink" 
                        onClick={onNewDrink}>🔄️
                    </button>
                </div>

                {allCorrect && (
                    <div className="success-message">
                        ✅ All the selected ingredients are correct!
                    </div>
                )}
            </div>
            
            <div className="mini-container">
                <h3>Espresso</h3>
                <div className="answer-space" id={correctEspresso}>
                    {inputs["espresso"]}
                </div>
                <br></br>

                <div className="radio-btn">
                    <RecipeChoices handleChange={(e) => setInputs((prevState) => ({
                        ...prevState,
                        [e.target.name]: e.target.value,
                    }))}
                    
                        label="espresso"
                        choices={ingredients["espresso"]}
                        checked={inputs["espresso"]}
                    />
                </div>
            </div>

            <div className="mini-container">
                <h3>Steamed Milk</h3>
                <div className="answer-space" id={correctSteamedMilk}>
                    {inputs["steamed-milk"]}
                </div>
                <br></br>

                <div className="radio-btn">
                    <RecipeChoices handleChange={(e) => setInputs((prevState) => ({
                        ...prevState,
                        [e.target.name]: e.target.value,
                    }))}
                    
                        label="steamed-milk"
                        choices={ingredients["steamed-milk"]}
                        checked={inputs["steamed-milk"]}
                    />
                </div>
            </div>
                
            <div className="mini-container">
                <h3>Foamed Milk</h3>
                <div className="answer-space" id={correctFoamedMilk}>
                    {inputs["foamed-milk"]}
                </div>
                <br></br>

                <div className="radio-btn">
                    <RecipeChoices handleChange={(e) => setInputs((prevState) => ({
                        ...prevState,
                        [e.target.name]: e.target.value,
                    }))}
                    
                        label="foamed-milk"
                        choices={ingredients["foamed-milk"]}
                        checked={inputs["foamed-milk"]}
                    />
                </div>
            </div>
                
            <div className="mini-container">
                <h3>Hot Water</h3>
                <div className="answer-space" id={correctHotWater}>
                    {inputs["hot-water"]}
                </div>
                <br></br>

                <div className="radio-btn">
                    <RecipeChoices handleChange={(e) => setInputs((prevState) => ({
                        ...prevState,
                        [e.target.name]: e.target.value,
                    }))}
                    
                        label="hot-water"
                        choices={ingredients["hot-water"]}
                        checked={inputs["hot-water"]}
                    />
                </div>
            </div>

            <div className="mini-container">
                <h3>Warm Milk</h3>
                <div className="answer-space" id={correctWarmMilk}>
                    {inputs["warm-milk"]}
                </div>
                <br></br>

                <div className="radio-btn">
                    <RecipeChoices handleChange={(e) => setInputs((prevState) => ({
                        ...prevState,
                        [e.target.name]: e.target.value,
                    }))}
                    
                        label="warm-milk"
                        choices={ingredients["warm-milk"]}
                        checked={inputs["warm-milk"]}
                    />
                </div>
            </div>

            <div className="mini-container">
                <h3>Foam</h3>
                <div className="answer-space" id={correctFoam}>
                    {inputs["foam"]}
                </div>
                <br></br>

                <div className="radio-btn">
                    <RecipeChoices handleChange={(e) => setInputs((prevState) => ({
                        ...prevState,
                        [e.target.name]: e.target.value,
                    }))}
                    
                        label="foam"
                        choices={ingredients["foam"]}
                        checked={inputs["foam"]}
                    />
                </div>
            </div>
                
            <div className="mini-container">
                <h3>Whipped Cream</h3>
                <div className="answer-space" id={correctWhippedCream}>
                    {inputs["whipped-cream"]}
                </div>
                <br></br>

                <div className="radio-btn">
                    <RecipeChoices handleChange={(e) => setInputs((prevState) => ({
                        ...prevState,
                        [e.target.name]: e.target.value,
                    }))}
                    
                        label="whipped-cream"
                        choices={ingredients["whipped-cream"]}
                        checked={inputs["whipped-cream"]}
                    />
                </div>
            </div>

            <div className="mini-container">
                <h3>Ice Cream</h3>
                <div className="answer-space" id={correctIceCream}>
                    {inputs["ice-cream"]}
                </div>
                <br></br>

                <div className="radio-btn">
                    <RecipeChoices handleChange={(e) => setInputs((prevState) => ({
                        ...prevState,
                        [e.target.name]: e.target.value,
                    }))}
                    
                        label="ice-cream"
                        choices={ingredients["ice-cream"]}
                        checked={inputs["ice-cream"]}
                    />
                </div>
            </div>
                
            <div className="mini-container">
                <h3>Size</h3>
                <div className="answer-space" id={correctSize}>
                    {inputs["size"]}
                </div>
                <br></br>

                <div className="radio-btn">
                    <RecipeChoices handleChange={(e) => setInputs((prevState) => ({
                        ...prevState,
                        [e.target.name]: e.target.value,
                    }))}
                    
                        label="size"
                        choices={ingredients["size"]}
                        checked={inputs["size"]}
                    />
                </div>
            </div>

            <form className="container">
                <button 
                    className="button submit"
                    type="submit" 
                    onClick={onCheckAnswer}>
                        Check Answer
                </button>
            </form>
        </div>
    );
};

export default BaristaForm;