let jobs = [
    {
        id: 1,
        company_name: "raximjon_pepsi",
        tax: 13,
        budget: 2_000_000,
        expensesPerYear: [
            {
                title: "furniture",
                total: 15000
            },
            {
                title: "salary",
                total: 500_000
            },
            {
                title: "rent",
                total: 200_000
            },
        ]
    },
    {
        id: 2,
        company_name: "amir_fanta_stick",
        tax: 12,
        budget: 1_800_000,
        expensesPerYear: [
            {
                title: "furniture",
                total: 20_000
            },
            {
                title: "salary",
                total: 700_000
            },
            {
                title: "rent",
                total: 100_000
            },
        ]
    },
    {
        id: 3,
        company_name: "frump_buildings",
        tax: 14,
        budget: 3_000_000,
        expensesPerYear: [
            {
                title: "furniture",
                total: 50_000
            },
            {
                title: "salary",
                total: 1_200_000
            },
            {
                title: "rent",
                total: 500_000
            },
        ]
    },
    {
        id: 4,
        company_name: "farrux_tube",
        tax: 12,
        budget: 10_000_000,
        expensesPerYear: [
            {
                title: "furniture",
                total: 700_000
            },
            {
                title: "salary",
                total: 4_000_000
            },
            {
                title: "rent",
                total: 300_000
            },
        ]
    },
    {
        id: 5,
        company_name: "desla",
        tax: 14,
        budget: 14_000_000,
        expensesPerYear: [
            {
                title: "furniture",
                total: 700_000
            },
            {
                title: "salary",
                total: 3_000_000
            },
            {
                title: "rent",
                total: 5_000_000
            },
        ]
    },
    {
        id: 6,
        company_name: "nosway_u_rustama",
        tax: 10,
        budget: 100_000,
        expensesPerYear: [
            {
                title: "furniture",
                total: 10_000
            },
            {
                title: "salary",
                total: 0
            },
            {
                title: "rent",
                total: 0
            },
        ]
    },
    {
        id: 6,
        company_name: "vinovodochnaya_u_timura",
        tax: 21,
        budget: 1_000_000,
        expensesPerYear: [
            {
                title: "furniture",
                total: 40_000
            },
            {
                title: "salary",
                total: 20_000
            },
            {
                title: "rent",
                total: 30_000
            },
        ]
    },
    {
        id: 7,
        company_name: "sokhib_books",
        tax: 10,
        budget: 400_000,
        expensesPerYear: [
            {
                title: "furniture",
                total: 40_000
            },
            {
                title: "salary",
                total: 12_000
            },
            {
                title: "rent",
                total: 15_000
            },
        ]
    }

]




// task 1
let totalTax = 0;
for (let i = 0; i < jobs.length; i++) {
    totalTax += jobs[i].tax;
}
console.log("Total tax: ", totalTax);



// task 2
let highestMonthlyTaxCompany = jobs.reduce((a, b) => {
    let aMonthlyTax = (a.tax / 100) * a.budget / 12;
    let bMonthlyTax = (b.tax / 100) * b.budget / 12;
    return aMonthlyTax > bMonthlyTax ? a : b;
});
console.log(highestMonthlyTaxCompany.company_name + " платит больше налог за месяц");



// task 3
let minTax = jobs[0].tax;
let minCompanyName = jobs[0].company_name;
for (let i = 1; i < jobs.length; i++) {
    if (jobs[i].tax < minTax) {
        minTax = jobs[i].tax;
        minCompanyName = jobs[i].company_name;
    }
}
console.log(`Компания ${minCompanyName} платит наименьший налог`);



// task 4
let totalExpenses = 0;
for (let i = 0; i < jobs.length; i++) {
    let companyExpenses = jobs[i].expensesPerYear.reduce((sum, expense) => sum + expense.total, 0);
    totalExpenses += companyExpenses;
}
let avgExpenses = totalExpenses / jobs.length;
console.log(avgExpenses);