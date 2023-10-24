var elForm, elSelectPackage, elPackageHint, elTerms, elTermsHint;       
elForm          = document.getElementById('formSignup');                
elSelectPackage = document.getElementById('package');
elPackageHint   = document.getElementById('packageHint');
elTerms         = document.getElementById('terms');
elTermsHint     = document.getElementById('termsHint');

function packageHint() {                                                
    var pack = this.options[this.selectedIndex].value;                  
    if (pack === 'monthly') {                                           
        elPackageHint.innerHTML = 'Save $20 if you pay for 1 year!';    
    } else if (pack === 'weekly') {                                                            
        elPackageHint.innerHTML = "Are you sure you wouldn't want to give our monthly deal a try?";                       
    } else {
        elPackageHint.innerHTML = 'Prepare to have your tastebuds amazed for the next 1 year!';
    }
}

function checkTerms(event) {                                            
    if (!elTerms.checked) {                                             
        elTermsHint.innerHTML = 'Please agree to the terms to continue.';         
        event.preventDefault();                                     
    }
}

elForm.addEventListener('submit', checkTerms, false);
elSelectPackage.addEventListener('change', packageHint, false);