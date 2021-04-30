class SkillsSection extends Component
{
    constructor()
    {
        super();
        this.AddClass("section");
        this.AddClass("skillsSection");
        
        this.title = new Component("span");
        this.title.AddClass(CssClassConstants.ABOUT_ME_TITLE);
        this.title.SetFontSize(FontSizeConstants.ABOUT_ME_TITLE);
        this.title.GetElement().innerHTML = "Skills";
        this.AddChild(this.title);

        this.description = new Component("span");
        this.description.AddClass(CssClassConstants.ABOUT_ME_DESCRIPTION);
        this.description.GetElement().innerHTML = `My knowledge in various languages and softwares`;
        this.AddChild(this.description);

        this.skillsChart = new SkillsChart();
        this.AddChild(this.skillsChart);

    }

    Resize(width, height)
    {
        super.Resize(width, height);

        let y = 50;
        this.title.Resize(width, 50);
        this.title.Place((this.GetWidth() - this.title.GetWidth()) / 2, y);
        y += this.title.GetHeight() + CssConstants.PADDING3X;
        
        this.description.Resize(width, 100);
        this.description.Place((this.GetWidth() - this.description.GetWidth()) / 2, y);
        y += this.description.GetHeight() + CssConstants.PADDING5X;

        this.skillsChart.Resize(width / 2, 300);
        this.skillsChart.Place((this.GetWidth() - this.skillsChart.GetWidth()) / 2, y);
    }
}