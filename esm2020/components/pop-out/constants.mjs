export var popOutPositions;
(function (popOutPositions) {
    popOutPositions["TopLeft"] = "topLeft";
    popOutPositions["TopRight"] = "topRight";
    popOutPositions["BottomLeft"] = "bottomLeft";
    popOutPositions["BottomRight"] = "bottomRight";
})(popOutPositions || (popOutPositions = {}));
export const dropdownPositionsMap = new Map([
    [
        popOutPositions.TopLeft,
        {
            originX: 'start',
            originY: 'top',
            overlayX: 'start',
            overlayY: 'bottom'
        }
    ],
    [
        popOutPositions.TopRight,
        {
            originX: 'end',
            originY: 'top',
            overlayX: 'end',
            overlayY: 'bottom'
        }
    ],
    [
        popOutPositions.BottomLeft,
        {
            originX: 'start',
            originY: 'bottom',
            overlayX: 'start',
            overlayY: 'top'
        }
    ],
    [
        popOutPositions.BottomRight,
        {
            originX: 'end',
            originY: 'bottom',
            overlayX: 'end',
            overlayY: 'top'
        }
    ]
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc3RhbnRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdXAvY29tcG9uZW50cy9wb3Atb3V0L2NvbnN0YW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxNQUFNLENBQU4sSUFBWSxlQUtYO0FBTEQsV0FBWSxlQUFlO0lBQ3pCLHNDQUFtQixDQUFBO0lBQ25CLHdDQUFxQixDQUFBO0lBQ3JCLDRDQUF5QixDQUFBO0lBQ3pCLDhDQUEyQixDQUFBO0FBQzdCLENBQUMsRUFMVyxlQUFlLEtBQWYsZUFBZSxRQUsxQjtBQUVELE1BQU0sQ0FBQyxNQUFNLG9CQUFvQixHQUFHLElBQUksR0FBRyxDQUEwQztJQUNuRjtRQUNFLGVBQWUsQ0FBQyxPQUFPO1FBQ3ZCO1lBQ0UsT0FBTyxFQUFFLE9BQU87WUFDaEIsT0FBTyxFQUFFLEtBQUs7WUFDZCxRQUFRLEVBQUUsT0FBTztZQUNqQixRQUFRLEVBQUUsUUFBUTtTQUNuQjtLQUNGO0lBQ0Q7UUFDRSxlQUFlLENBQUMsUUFBUTtRQUN4QjtZQUNFLE9BQU8sRUFBRSxLQUFLO1lBQ2QsT0FBTyxFQUFFLEtBQUs7WUFDZCxRQUFRLEVBQUUsS0FBSztZQUNmLFFBQVEsRUFBRSxRQUFRO1NBQ25CO0tBQ0Y7SUFDRDtRQUNFLGVBQWUsQ0FBQyxVQUFVO1FBQzFCO1lBQ0UsT0FBTyxFQUFFLE9BQU87WUFDaEIsT0FBTyxFQUFFLFFBQVE7WUFDakIsUUFBUSxFQUFFLE9BQU87WUFDakIsUUFBUSxFQUFFLEtBQUs7U0FDaEI7S0FDRjtJQUNEO1FBQ0UsZUFBZSxDQUFDLFdBQVc7UUFDM0I7WUFDRSxPQUFPLEVBQUUsS0FBSztZQUNkLE9BQU8sRUFBRSxRQUFRO1lBQ2pCLFFBQVEsRUFBRSxLQUFLO1lBQ2YsUUFBUSxFQUFFLEtBQUs7U0FDaEI7S0FDRjtDQUNGLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbm5lY3Rpb25Qb3NpdGlvblBhaXIgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5cbmV4cG9ydCBlbnVtIHBvcE91dFBvc2l0aW9ucyB7XG4gIFRvcExlZnQgPSAndG9wTGVmdCcsXG4gIFRvcFJpZ2h0ID0gJ3RvcFJpZ2h0JyxcbiAgQm90dG9tTGVmdCA9ICdib3R0b21MZWZ0JyxcbiAgQm90dG9tUmlnaHQgPSAnYm90dG9tUmlnaHQnXG59XG5cbmV4cG9ydCBjb25zdCBkcm9wZG93blBvc2l0aW9uc01hcCA9IG5ldyBNYXA8cG9wT3V0UG9zaXRpb25zLCBDb25uZWN0aW9uUG9zaXRpb25QYWlyPihbXG4gIFtcbiAgICBwb3BPdXRQb3NpdGlvbnMuVG9wTGVmdCxcbiAgICB7XG4gICAgICBvcmlnaW5YOiAnc3RhcnQnLFxuICAgICAgb3JpZ2luWTogJ3RvcCcsXG4gICAgICBvdmVybGF5WDogJ3N0YXJ0JyxcbiAgICAgIG92ZXJsYXlZOiAnYm90dG9tJ1xuICAgIH1cbiAgXSxcbiAgW1xuICAgIHBvcE91dFBvc2l0aW9ucy5Ub3BSaWdodCxcbiAgICB7XG4gICAgICBvcmlnaW5YOiAnZW5kJyxcbiAgICAgIG9yaWdpblk6ICd0b3AnLFxuICAgICAgb3ZlcmxheVg6ICdlbmQnLFxuICAgICAgb3ZlcmxheVk6ICdib3R0b20nXG4gICAgfVxuICBdLFxuICBbXG4gICAgcG9wT3V0UG9zaXRpb25zLkJvdHRvbUxlZnQsXG4gICAge1xuICAgICAgb3JpZ2luWDogJ3N0YXJ0JyxcbiAgICAgIG9yaWdpblk6ICdib3R0b20nLFxuICAgICAgb3ZlcmxheVg6ICdzdGFydCcsXG4gICAgICBvdmVybGF5WTogJ3RvcCdcbiAgICB9XG4gIF0sXG4gIFtcbiAgICBwb3BPdXRQb3NpdGlvbnMuQm90dG9tUmlnaHQsXG4gICAge1xuICAgICAgb3JpZ2luWDogJ2VuZCcsXG4gICAgICBvcmlnaW5ZOiAnYm90dG9tJyxcbiAgICAgIG92ZXJsYXlYOiAnZW5kJyxcbiAgICAgIG92ZXJsYXlZOiAndG9wJ1xuICAgIH1cbiAgXVxuXSk7XG4iXX0=